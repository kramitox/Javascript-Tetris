class SceneManager
{
	/**
	* constructor that creates the sceneManager's variables
	* @constructor 
	*/
	constructor()
	{
		this.currentScene = null;
		this.scenesDict = {};
		this.titles = [];
		this.sceneIndex = -1;
	}
	
	/**
	* Function that adds the title of the passed scene to a list of scene titles
	* @param {Scene} scene 
	*/
	addScene(scene)
	{
		this.scenesDict[scene.getTitle()] = scene;
		this.titles.push(scene.getTitle());
		
		if (this.sceneIndex == -1)
		{
			this.sceneIndex++;
			this.currentScene = scene;
		}
	}
	
	/**
	* Function that checks through the list of titles until it finds the passed title name
	* @param {string} title the title of a scene 
	*/
	goToScene(title)
	{
		if(this.currentScene !== null)
		{
			this.currentScene.stop();
		}
		
		for (var i = 0; i < this.titles.length;i++)
		{
			if(this.titles[i] === title)
			{
				this.index = i;
			}
		}
		
		this.currentScene = this.scenesDict[this.titles[this.index]];
		
		if(this.currentScene !== null)
		{
			this.currentScene.start();
		}		
	}
	
	/**
	* Render funtion for the current scene
	* @param {context} ctx canvas.getContext()
	*/
	render(ctx)
	{
		ctx.font = ''+12+'px Arial';
		document.body.style.background = 'white';
		console.log(this.currentScene.constructor.name);
		if (this.currentScene.constructor.name == "MainMenu")
		{
			this.currentScene.render(ctx, 'pink', 42);
		}
		else
		{
			this.currentScene.render(ctx);
		}
	}
	
}