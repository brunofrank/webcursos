var Paths = {
	paths: {},
	
	register: function(pathID, path){
		Paths.paths[pathID] = path;
	},
	
	get: function(pathID, params){
		var natureUrl = Paths.paths[pathID];
		if (params != undefined){
			for (param in params) {
				natureUrl = natureUrl.replace(':'+param, params[param])
			}
		}
		
		return natureUrl;
	}
}

modulejs.define( 'paths', function() {
	return Paths;
});