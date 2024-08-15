urlParams = new URLSearchParams(window.location.search);
fileName = urlParams.get("img") || "hero.png";
title = urlParams.get("title") || "kia ora bro";

var values = {
	amount: 13,
};

var raster, group;
var done = false;
var piece = createPiece();
var count = 0;
var exportSVGLink = document.getElementById("exportSVG");

handleImage(fileName);

function createPiece() {
	var group = new Group();
	var hexagon = new Path.RegularPolygon({
		center: view.center,
		sides: 6,
		radius: 50,
		fillColor: "gray",
		parent: group,
	});
	for (var i = 0; i < 2; i++) {
		var path = new Path({
			closed: true,
			parent: group,
			fillColor: i == 0 ? "white" : "black",
		});
		for (var j = 0; j < 3; j++) {
			var index = (i * 2 + j) % hexagon.segments.length;
			path.add(hexagon.segments[index].clone());
		}
		path.add(hexagon.bounds.center);
	}
	// Remove the group from the document, so it is not drawn:
	group.remove();
	return group;
}

function handleImage(image) {
	count = 0;
	var size = piece.bounds.size;

	if (group) group.remove();

	// As the web is asynchronous, we need to wait for the raster to
	// load before we can perform any operation on its pixels.
	raster = new Raster(image);
	raster.visible = false;
	raster.on("load", function () {
		// Transform the raster, so it fills the view:
		raster.fitBounds(view.bounds, true);
		group = new Group();
		for (var y = 0; y < values.amount; y++) {
			for (var x = 0; x < values.amount; x++) {
				var copy = piece.clone();
				copy.position += size * [x + (y % 2 ? 0.5 : 0), y * 0.75];
				group.addChild(copy);
			}
		}

		// Transform the group so it covers the view:
		group.fitBounds(view.bounds, true);
		//group.scale(1.8);
		group.scale(1.1);
	});
}

function onFrame(event) {
	if (!group || done) return;
	// short circuit rendering when finished.
	console.log(done);

	if (count > group.children.length) {
		// remove image so it is not in the SVG export
		raster.remove();
		// generate svg and make available as the payload for the link
		// before text is added ( i think )
		group.scale(1.1);

		var svg = document.bang.exportSVG({
			asString: true,
		});
		var blob = new Blob([svg], { type: "image/svg+xml" });
		var url = URL.createObjectURL(blob);
		document.getElementById("downloadSVG").href = url;
		done = true;
		group.scale(2.03);
		//nconsole.log(exportSVGLink.href);


		// PNG is currently done at html layer cause this has the working text wrapping and
		// working PNG generation

		return;
	} else {
		// Loop through the uncolored hexagons in the group and fill them
		// with the average color:
		var length = Math.min(count + values.amount, group.children.length);
		for (var i = count; i < length; i++) {
			piece = group.children[i];
			var hexagon = piece.children[0];
			var color = raster.getAverageColor(hexagon);
			if (color) {
				hexagon.fillColor = color;
				var top = piece.children[1];
				top.fillColor = color.clone();
				top.fillColor.brightness *= 1.5;

				var right = piece.children[2];
				right.fillColor = color.clone();
				right.fillColor.brightness *= 0.5;
			}
		}
		count += values.amount;
		console.log(count, length);
	}
}

console.log(raster);

document.bang = project;

function exportSVG() {
	var svg = document.bang.exportSVG({
		asString: true,
	});
	console.log(svg);
	var blob = new Blob([svg], { type: "image/svg+xml" });
	var url = URL.createObjectURL(blob);
	document.getElementById("downloadSVG").href = url;
}

//document.exportSVG = exportSVG;
