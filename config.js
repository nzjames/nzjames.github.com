export const deploymentEnv = process.env.STAGE || 'development';

export const siteUrl = (()=> {
	switch(deploymentEnv) {
	case 'production': return 'https://nzjames.com';
	case 'staging': return 'https://com-nzjames-staging.fly.dev/';
	default: return 'http://localhost:8000'
	}
})();
