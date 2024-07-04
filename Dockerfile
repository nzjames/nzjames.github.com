FROM pierrezemb/gostatic
COPY ./_site/ /srv/http/
CMD ["-port","8080","-https-promote", "-enable-logging"]
