(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.audi = function() {
	this.initialize(img.audi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,195);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.audi();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,100,195), null);


// stage content:
(lib.Untitled1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(50,97.5,1,1,0,0,0,50,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:56.6,y:108.9},0).wait(1).to({x:63.2,y:120.3},0).wait(1).to({x:69.7,y:131.8},0).wait(1).to({x:76.3,y:143.2},0).wait(1).to({x:82.9,y:154.6},0).wait(1).to({x:89.5,y:166},0).wait(1).to({x:96,y:177.4},0).wait(1).to({x:102.6,y:188.9},0).wait(1).to({x:109.2,y:200.3},0).wait(1).to({x:115.8,y:211.7},0).wait(1).to({x:122.4,y:223.1},0).wait(1).to({x:128.9,y:234.6},0).wait(1).to({x:135.5,y:246},0).wait(1).to({x:142.1,y:257.4},0).wait(1).to({x:148.7,y:268.8},0).wait(1).to({x:155.3,y:280.2},0).wait(1).to({x:161.8,y:291.7},0).wait(1).to({x:168.4,y:303.1},0).wait(1).to({x:175,y:314.5},0).wait(1).to({x:181.6,y:325.9},0).wait(1).to({x:188.1,y:337.3},0).wait(1).to({x:194.7,y:348.8},0).wait(1).to({x:201.3,y:360.2},0).wait(1).to({x:207.9,y:371.6},0).wait(1).to({x:214.5,y:383},0).wait(1).to({x:221,y:394.4},0).wait(1).to({x:227.6,y:405.9},0).wait(1).to({x:234.2,y:417.3},0).wait(1).to({x:240.8,y:428.7},0).wait(1).to({x:247.4,y:440.1},0).wait(1).to({x:253.9,y:451.6},0).wait(1).to({x:260.5,y:463},0).wait(1).to({x:267.1,y:474.4},0).wait(1).to({x:273.7,y:485.8},0).wait(1).to({x:280.2,y:497.2},0).wait(1).to({x:286.8,y:508.7},0).wait(1).to({x:293.4,y:520.1},0).wait(1).to({x:300,y:531.5},0).wait(1).to({x:306.6,y:542.9},0).wait(1).to({x:313.1,y:554.3},0).wait(1).to({x:319.7,y:565.8},0).wait(1).to({x:326.3,y:577.2},0).wait(1).to({x:332.9,y:588.6},0).wait(1).to({x:339.5,y:600},0).wait(1).to({x:346,y:611.4},0).wait(1).to({x:352.6,y:622.9},0).wait(1).to({x:359.2,y:634.3},0).wait(1).to({x:365.8,y:645.7},0).wait(1).to({x:372.3,y:657.1},0).wait(1).to({x:378.9,y:668.6},0).wait(1).to({x:385.5,y:680},0).wait(1).to({x:392.1,y:691.4},0).wait(1).to({x:398.6,y:702.8},0).wait(1).to({x:405.2,y:714.2},0).wait(1).to({x:411.8,y:725.7},0).wait(1).to({x:418.4,y:737.1},0).wait(1).to({x:425,y:748.5},0).wait(1).to({x:431.5,y:759.9},0).wait(1).to({x:438.1,y:771.3},0).wait(1).to({x:444.7,y:782.8},0).wait(1).to({x:451.3,y:794.2},0).wait(1).to({x:457.9,y:805.6},0).wait(1).to({x:464.4,y:817},0).wait(1).to({x:471,y:828.4},0).wait(1).to({x:477.6,y:839.9},0).wait(1).to({x:484.2,y:851.3},0).wait(1).to({x:490.8,y:862.7},0).wait(1).to({x:497.3,y:874.1},0).wait(1).to({x:503.9,y:885.6},0).wait(1).to({x:510.5,y:897},0).wait(1).to({x:517.1,y:908.4},0).wait(1).to({x:523.6,y:919.8},0).wait(1).to({x:530.2,y:931.2},0).wait(1).to({x:536.8,y:942.7},0).wait(1).to({x:543.4,y:954.1},0).wait(1).to({x:550,y:965.5},0).wait(1).to({x:556.5,y:976.9},0).wait(1).to({x:563.1,y:988.3},0).wait(1).to({x:569.7,y:999.8},0).wait(1).to({x:576.3,y:1011.2},0).wait(1).to({x:582.9,y:1022.6},0).wait(1).to({x:589.4,y:1034},0).wait(1).to({x:596,y:1045.4},0).wait(1).to({x:602.6,y:1056.9},0).wait(1).to({x:609.2,y:1068.3},0).wait(1).to({x:615.7,y:1079.7},0).wait(1).to({x:622.3,y:1091.1},0).wait(1).to({x:628.9,y:1102.6},0).wait(1).to({x:635.5,y:1114},0).wait(1).to({x:642.1,y:1125.4},0).wait(1).to({x:648.6,y:1136.8},0).wait(1).to({x:655.2,y:1148.2},0).wait(1).to({x:661.8,y:1159.7},0).wait(1).to({x:668.4,y:1171.1},0).wait(1).to({x:675,y:1182.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(360,640,100,195);
// library properties:
lib.properties = {
	id: '85E0263EB859954CBEBEBA80E2AC1D05',
	width: 720,
	height: 1280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/audi.png", id:"audi"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['85E0263EB859954CBEBEBA80E2AC1D05'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;