(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// stage content:
(lib._lib = function() {
	this.initialize();

	// mc1
	this.mc1 = new lib.CircleMc();
	this.mc1.setTransform(112.3,83.3,1,1,0,0,0,29,29);

	// mc2
	this.mc2 = new lib.Platypus();
	this.mc2.setTransform(370,205.1,1,1,0,0,0,130.6,160.6);

	this.addChild(this.mc2,this.mc1);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(83.3,34.5,417.5,341);
p.frameBounds = [rect];


// symbols:



(lib.Tail = function() {
	this.initialize();

	// tail
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ahsl/QACgIAuAgQAnAaAMALQA7A7AmBhQAkBYAHBgQAGBVgQBrQgKBFgHAZQgSA6ghARQgnAUghgnQgcgggIgqQgHgnABg+QAAhRgBgTQgEg5gRgcQgCgCgXgRQgXgSgBAEQABgHAYANQAUALAFAEQAZAYAIA6QAEAgABA8QABBAADAdQAGA0ASAaQAMAQAQAJQAVAKAPgLQAagVAOg4QAEgRAJhIQANhjgFhPQgHhagfhSQghhYgwg5QgGgIgtglQgugmgBAEIAAAA").cp();
	this.shape.setTransform(13.3,39.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8C6239").s().p("Ahol5IgYFeQBFALALBoQAGA6gFBnQAEAsAKAbQAPAnAdAOQAeANAVgTQAQgOANgjQAYhEAJhXQAIhPgGhQQgJh1g7hpQg/h2hjgpIAAAA").cp();
	this.shape_1.setTransform(12.9,39.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,1.3,26.6,77.3);
p.frameBounds = [rect];


(lib.LegFrontMove = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFgHQADAJACAHQACAFASANQASANAAgDQACAIgdgNQgUgKgBgHQgEANgJASQgMgZgCgKQAEg+AKAHQgIgEAIBEQAHgUAGgbQACAHADANIAAAA").cp();
	this.shape_2.setTransform(6.3,16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAhAAQgWANgIACQgSAGgPgDQgdgNAIgFIAPAHQAOAEAWgHQABAAAbgLQAYgMABABQAFAFgZANIAAAA").cp();
	this.shape_3.setTransform(10.8,34.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABoDZQgxA4hDgqQg4gkgdhBQgfhJAAhMQAQhrAKAJQgBgBgGAmQgGAlAAAFQAABDAaBFQAcBJAqAgQAXASAfACQAiABATgXQAeglgRhOQgZhWgGgfQgNhLALg7QAahYAJAGQgBgBgLArQgKArgBAGQgGA+AVBXQAIAgAXBSQAMBHgiAnIAAAA").cp();
	this.shape_4.setTransform(13,25.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A67C52").s().p("ABxBTQgfh7gEgnQgJheAnhDIjNCCQgVAjgBA5QgCA1ASA5QApCFBXAPQBBALAWg6QARgugQhAIAAAA").cp();
	this.shape_5.setTransform(12.5,24.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgjhRQACAAAGAaQAEANADAQQALAaATAVQAPARAYARQAeASAOAJQgQgCgggFQgcgEgSgHQgigLgVgTQgzhRAWgBQAeA6AHAGQATARAdAJQgRgHgPg6QgPg8AMACIAAAA").cp();
	this.shape_6.setTransform(25.5,53.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhAgmQADAwAoAeQAfAZA3AIQgngYgVgnQgVglACgtIgyAi").cp();
	this.shape_7.setTransform(23.3,52.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgthQQACAAAFARQACAJACAKQAOAjAdAcQARAQAWALQAMAGAgANQgZAKgNADQgWAEgSgDQgmgHgggeQgtg3ANgDQA1A0AJAFQAhAVAQAAQgFgGADACQgmgigQgcQgbhNAPABIAAAA").cp();
	this.shape_8.setTransform(30.8,47);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgehLIgsBAQAOApAuAbQAuAcArgPQgtgRgegpQgggpACguIAAAA").cp();
	this.shape_9.setTransform(29.3,46.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAgDQgMg1AMAAQABAAAMApQAMApABADQAIAPAdArQgggFgSgGQgXgKgRgSQgdgggGgpQABhBAMAEQAGBBACAHQARAuAmAVQgJgegFgaIAAAA").cp();
	this.shape_10.setTransform(16.6,55.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgohPQgSAyAbAxQAcA0AzAIQgog4AAhJIgwge").cp();
	this.shape_11.setTransform(15.7,55.2);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0.4,40.1,64.3);
p.frameBounds = [rect];


(lib.hair4 = function() {
	this.initialize();

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgzgKQABADAhggQAcgfAJgLQAAANAAAYQAAAVgDAQQgCAQALgHQAQgKAKgDQAFAOgbArQgaAqgEgHQAIAIAhhXQgSAJgXAWQAGgoABgCQAEgZAAgTQgIAJgXASQgdAVgCgFIAAAA").cp();
	this.shape_12.setTransform(5.3,8.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A67C52").s().p("AACBLQAwgpAAgsQgXAIgRANQAKgqAAgrQgdAkgoAVIAzBc").cp();
	this.shape_13.setTransform(5,9.1);

	this.addChild(this.shape_13,this.shape_12);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0.2,10.6,16.5);
p.frameBounds = [rect];


(lib.hair3 = function() {
	this.initialize();

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAbAwQgDAFgOAIQgNAJgBgGQAMgFABgBQAOgKgCgaQgCgVgMgaQgBADgCAVQgBAMgDAJQgbAkgDgIQAFAIAXhFIAAg1QASAgAHAUQAOAmgKAYIAAAA").cp();
	this.shape_14.setTransform(3.2,6.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A67C52").s().p("AgcAoQAYgLAFgdQADgOAAgpQAUAeAEAhQAGAugjACIgbgQ").cp();
	this.shape_15.setTransform(2.9,7.7);

	this.addChild(this.shape_15,this.shape_14);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0.2,6.4,13.5);
p.frameBounds = [rect];


(lib.hair2 = function() {
	this.initialize();

	// Layer 1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAYAeQgGAWgHgFQADACgFgiQgEgfgDAEQgBACgHAoQgKApgLgIQgDgBAGgbQAGgeAAgCQAAgSgHgwQATALAGAFQANALAHAMQAIAPABAPQABAGgGASIAAAA").cp();
	this.shape_16.setTransform(3,6.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A67C52").s().p("AAWgLQAIAZgPAWIgnARQAagugIg7QAVANAHAcIAAAA").cp();
	this.shape_17.setTransform(2.6,7.7);

	this.addChild(this.shape_17,this.shape_16);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0.2,5.9,13);
p.frameBounds = [rect];


(lib.hair1 = function() {
	this.initialize();

	// Layer 1
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAxgcQACAIgEAiQgFAlgKgHQgDgCAEgfQAEgegKgIQABABgHAXQgGAVgCADQgJAYgOANQgmAVgBgMQAggYADgFQAJgRAHgkIAJg3QAPAKAIAIQALALAEANIAAAA").cp();
	this.shape_18.setTransform(5,7.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A67C52").s().p("AAjgKQADAbgPAWIg6ARQAUgKALgdQAFgRAJg3QAWAOADAfIAAAA").cp();
	this.shape_19.setTransform(5.9,7.8);

	this.addChild(this.shape_19,this.shape_18);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0.2,10.1,14.4);
p.frameBounds = [rect];


(lib.EyeBallDot = function() {
	this.initialize();

	// Layer 1
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAAAUQgHAAgGgGQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAIAAAA").cp();
	this.shape_20.setTransform(2,2);

	this.addChild(this.shape_20);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,4,4);
p.frameBounds = [rect];


(lib.EyeBall = function() {
	this.initialize();

	// Layer 1
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("ACGAiQgBADg9gXQhCgXgDAAQgEgBhEABQhAAAgBgBQgFgUCGgDQCYAtgNAWIAAAA").cp();
	this.shape_21.setTransform(-1.2,-8.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgNA1QgBgBAHgZQAHgZAAgCQAAgDgHgYQgHgYABgBQAKgPASBDQgSBDgKgOIAAAA").cp();
	this.shape_22.setTransform(13.6,2.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("ABJgRQALAMhSAWQgaAEgVgHQghgOAGgEQAAAAAiADQAjACADgBQABAAAlgJQAhgKACACIAAAA").cp();
	this.shape_23.setTransform(1.2,10.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AA5geQgUgjgcgaQgDgDgkgbQACgIAsAcQAgAYAYAlQAdArgBAqQgDAygvAVQgnASgmgZQgigVgUgqQgTgoABgmQARhKAKAJQABABgMAhQgHAiAOAnQAPArAdAbQAjAiAmgSQAmgQAAgpQAAghgWgkIAAAA").cp();
	this.shape_24.setTransform(0.1,0.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhIhdQgTAZAAApQABAlARAlQASAmAcATQAeAVAjgMQBSgagqhfQgRgngfgfQgegggegHIgqAY").cp();
	this.shape_25.setTransform(0.1,-0.2);

	this.addChild(this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-14.8,-12.3,30,25);
p.frameBounds = [rect];


(lib.Eye = function() {
	this.initialize();

	// eyeball
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AALAQQgGAFgHgCQgIgBgFgHQgEgHABgGQABgIAHgFQAGgFAHACQAIABAFAHQAEAHgBAGQgBAJgHAEIAAAA").cp();
	this.shape_26.setTransform(11.3,14.4);

	// eyeshape
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAAhGQAYARATAYQAVAbAEAWQAFAegXAQQgEABgDABQgTAGgKADQgNgCgNgKQgZgRgRgfQgOgbAAgcQAAgCADgQQAIgDAIgDQAXgIAQgGQAFADAFADIAAAA").cp();
	this.shape_27.setTransform(11.3,10.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("ABDgZQgGgYAAgBQAHgJAMAcQALAaAAAGQgBAKgKAYQgMAdgHgJQgBgBAHgZQAHgZAAgDQAAgCgHgYIAAAAABFhdQhFgCgCABQgDAAgQAGQACABABAAQAaAPAWAZQAcAfADAfQADAVgJAPIAAAAQAFAGgRAJQgFAEgGAEQgRAMgRgBQgIACgEAAQgcAFgVgHQghgPAGgFQAAgBAiAEQAGABAFAAQgRgMgOgVQgUgcgDgdQACgdADgNQgnAOAAgBQgLgSB9guQATgEA/AEQBLAFgDAQQgBAChBgCIAAAAAgWhPQgGgDgFgCQgQAFgXAIQgIAEgIACQgDARAAACQAAAcAOAaQARAfAZASQAPAKANABQAIgCATgGQADgBAEgBQAXgRgFgdQgEgXgVgbQgTgXgXgSIAAAAAABBvQABABBMgsQALAIgrAYQgqAZgDgOIAAAA").cp();
	this.shape_28.setTransform(13.6,11.7);

	this.addChild(this.shape_28,this.shape_27,this.shape_26);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,27.1,23.4);
p.frameBounds = [rect];


(lib.Beak = function() {
	this.initialize();

	// beakshapes
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#534741").s().p("AgOgUQAKgIAHACQgEABgMAEQAAAAgBABIAAAAAgLgEQACgIALgCIgaAEIAPgEQANgEAHAFQAHAHAEAIQAEAKgBAKQgCAMgQgOQgOgNgBgHQgCgFAIgEQACgBAAgBQgDACgGADQgBABgBABIAAAA").cp();
	this.shape_29.setTransform(51.9,23.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AEZkgQAqAxAUBRQATBNgCBKQgDBTghA8QhICJiQBJQiaBOiLg3QhGgbgthLQglg9gQhWQgJgsAEgbQAFgmAcgTQAXgRAsgPQA6gUAMgGQA5gcBAgtQAsggBBg2QATgPAbgeQAggkALgLQABgBAAAAQgJgcAIgYQALgkAuAbQAUAMATARQAFACgBADQAXAVASAcQAHAFACADIAAAAACUlsQgHAbAXAqQAXAiATAdQAkA5gFACQgJAEhXiAQgDgFgCgGQgLAMgYAeQgWAcgRAOQg6AygmAfQg4ArgyAdQgsAahUAfQglAOgRARQgTAXADAlQAGBKAeBDQAiBLA3AlQB6BSCkhKQCVhDBOiCQAkg9AGhTQAEgzgIg3IAFADQgIgJgkhbQgphYg2guQgVgQgIgFQgYgOgDALIAAAAAChi6QACAAACABQAPAEAKATQAKAUgIAOQgHANgQgHQgMgGgJgLQgMgPAJgKQABgBABgBQAGgDAEgCQgBABgCABQgIAEACAGQABAIAQANQAQAOACgMQABgKgEgKQgEgKgHgHQgHgFgPAEIgPAEQgFgEAPgGQABgBAAAAQAMgFAGAAIAAAA").cp();
	this.shape_30.setTransform(36.1,39.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#736357").s().p("ACSltQADgMAZAPQAHAEAVARQA3AuApBXQAjBbAIAKIgFgDQAIA2gEA0QgGBTgkA8QhNCDiVBDQikBKh6hTQg3gkgjhMQgehCgGhLQgDgkAUgXQAQgRAmgOQBTgfAtgbQAygdA3grQAmgeA7gzQAQgOAXgcQAYgeAKgLQACAFADAGQBYB/AIgDQAGgCglg6QgSgdgXgiQgYgqAHgaIAAAAACPilQgJAJANAQQAJALAMAFQAPAHAHgMQAIgPgKgTQgJgTgQgFQgBgBgDABQgIgDgKAIQgQAGAFAFIAdgFQgOADgCAIIAAAA").cp();
	this.shape_31.setTransform(36.2,39.8);

	this.addChild(this.shape_31,this.shape_30,this.shape_29);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0.5,72.2,78.5);
p.frameBounds = [rect];


(lib.CircleMc = function() {
	this.initialize();

	// 图层 1
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#003366").s("#CCCCCC").ss(1,1,1).p("AEiAAQAAB4hVBVQhVBVh4AAQh3AAhVhVQhVhVAAh4QAAh3BVhVQBVhVB3AAQB4AABVBVQBVBVAAB3IAAAA").cp();
	this.shape_32.setTransform(29,29);

	this.addChild(this.shape_32);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,58,58);
p.frameBounds = [rect];


(lib.BurstBalloon = function() {
	this.initialize();

	// poppedballoonshapes
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("ABnKlQAhAWgcAXQgVASgkAFQgpAFgKgbQgEgPACgZQACgUAFgJQgCgBgBgBQgBgBAAgDQAAgBgBgBQgJADgYACQgugFgqhCQg6hcgUieQgJhFAKgxQAEgTAHgRQACgrADg1QALiGAEhEQAHh1gBhYQACAGAfB/QAcBzAGgBQAQhFAChZQABg2gEhqQgIi7AUifQAIAvARCCQAPBvAMBCQAFAbAaB/QAMA1AHArQAQASAIAWQgEhMADheQACg9AGhsQAOBSA1DTQAvC1ALBvQAEBBACAxQAAACAAADQACATACAVQAEBPgBA1QgCBJgNA6QgRBKghANQgEACgDABQgMAGgNACQgJACgGABQgDgCgDgCQAigHAEgCQAXgLANgdQAJgTAHgiQAKgyAAhEQAAgUgBgoIAHAKQgBAAgWj/QgIhBgMhFQgQhjgSg1QgNghgHgRQgMgdgBgUQAAAfADA+QACA5gHAnQgBgHgMgMQgHgGgHgIQgDgCgCgCQgEgEgDgDQABAKABAJQADAcATByQAUB5ADgCQgPALgrkHQgFg7gPhGQgHgjgVhbQgShDgKg/QAAgBgEg1QgCghgJgTQgMAtAHBHQALB1AAABQAGCxglB7QgWgcgOgqQgDgKgRhDQABAMgZD9QgRCngBA7QACAPACAPIADgBQASCOAxBWQAPAbAMAOQATAXAUADQAdACAOAAQgIgLgMgRQghgwgBADQAHgOAlA0QALATAHAMQABgBABgCQAMgOAcAPQgHgHgBgvQAAg5AJABQAFABABA3QAAA3gDAAQgBAAAAAAQAGAEAFADQACgUAThCQAXhQADABIABAAQAPACgeBVQgOAogRAoQAKAHgDAFQgBAAgBABQgGgDgGgCIgngGQADAEgCANQgBAMgEAOQgHAqAzgMQA2gLgXgSQgQgLgHgGQgMgLADgKQgBADArATQABABACABIAAAAAAuDOIADgCQABACABgBIgBABQgCABgCgBIAAAA").cp();
	this.shape_33.setTransform(20.5,74.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C1272D").s().p("ABYJOQAHADAEAFQgCgBAAgBQgsgTABgDQgDAKAMALQAHAGARALQAXASg3ALQgzAMAHgqQAEgOABgMQACgNgDgEIAnAGQAGACAHADQAAgBABAAQAEgFgLgHQARgoAOgoQAehVgPgCIAAAAQgEgBgXBQQgTBCgBAUQgFgDgHgEQAAAAACAAQACAAAAg3QgBg3gFgBQgJgBAAA5QABAvAHAHQgcgPgMAOQgBACgBABQgFgMgNgTQglg0gHAOQABgDAhAwQAMARAIALQgOAAgdgCQgUgDgTgXQgMgOgPgbQgxhWgSiOIgDABQgCgPgCgPQABg7ARinQAZj9gBgMQARBDADAKQAOAqAWAcQAlh7gGixQAAgBgLh1QgHhHAMgtQAJATACAhQAEA1AAABQAKA/ASBDQAWBbAGAjQAPBGAFA7QAsEHAOgLQgDACgUh3QgTh0gCgcQgCgJgBgKQADADAFAEQABACADACQAHAIAHAGQAMAMABAHQAHgngBg5QgEg+AAgfQACAUALAdQAHARANAhQASA1ARBlQALBFAIA/QAWD/ACAAIgIgKQABAoAAAUQAABEgKAyQgGAigKATQgNAdgXALQgEACgiAHQADACADACIAAAAAAqB/QADABABgBIABgBQgBAAgBgBIgDAC").cp();
	this.shape_34.setTransform(20.9,82.5);

	this.addChild(this.shape_34,this.shape_33);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,41,149.2);
p.frameBounds = [rect];


(lib.balloonChunk4 = function() {
	this.initialize();

	// Layer 1
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAehSQADgBAIAxQAIAiAiAMQgnBHgsAAQgZAAgbgfQgZgdgFgbQgCgMAVgRQAZgSAGgEQASgNAKAAQAIAAgWARQgeATgGALQgMASARAVQAcAoAYABQAaAAAbgoQgQgdgMgYQgXgwAZAAIAAAA").cp();
	this.shape_35.setTransform(8.4,8.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C1272D").s().p("AAChBQgVAAgVAVQgBABgeAmQAVApAGAJQAUAeAYAFQAVAEAWgXQALgLASggQgagMgIgdQgGgUAAglIgeAP").cp();
	this.shape_36.setTransform(8.2,8.3);

	this.addChild(this.shape_36,this.shape_35);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0.2,16.8,16.8);
p.frameBounds = [rect];


(lib.balloonChunk3 = function() {
	this.initialize();

	// Layer 1
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAMjlQgSASgqAeQgeAVgCASQgBAPATAmQAWAtgIAoQgHAgghAuQgXAfAZAeQAkArADAPQAFgkAkgeQADgCBBgsQAogbAKgZQAOgggegxQgbgrgMgUQgVgjgJggQgCgJgMgkQgBgBAAgBIAAAAAATjrQAKAVAOAnQAHAUAuBIQAlA5gBAnQgBApgtAkQg3AjgWATQgkAgAAAlQAAAFAHAiQADAbgWgWQgKgLgKgaQgLgcgIgKQgFgHgVgXQgQgSgIgNQgHgNAMgVQARgXAFgIQAZglAIgTQANgfgIgeQgEgOgSgkQgPgggDgUQAGgIAQgJQAIgFAQgIQAugdAUgQQgJgcAAABQADgFANAbQAOgLgCgBQAHAEgQAQIAAAA").cp();
	this.shape_37.setTransform(13.4,26.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C1272D").s().p("AgCkFIAcAKQgEAIgGAIQgIgPgKgLIAAAAAAQjrQADAFACAGQAFANAGAeQAJAsAjA0QAkA0AHAbQANAtglAhQhJAzgcAdQgwAxAZA9QgXg0gOgaQgZgwgfgYQAdgtAPgYQAcgrgDgeQgBgPgcgwQgXgoAIgXQAXgNAvgaQAbgTAQgVIAAAA").cp();
	this.shape_38.setTransform(13.6,26.5);

	this.addChild(this.shape_38,this.shape_37);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0.2,0.2,26.5,53.5);
p.frameBounds = [rect];


(lib.balloonChunk2 = function() {
	this.initialize();

	// Layer 1
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("ABeAJQAcAzAXAsQhZABgvAfQgsAfgmBRQgmgggEgDQgXgXgFgWQgFgXAbgrQAmg7ABgDQAOgkAjhsQAdhcAZgzQASDNgDAAQgFgBgJhCQgJhGgCgHQgGATgfBuQgXBMgZAvQgnBJgBADQgIAgApAnQAgg/AwghQA0glBCAHQAAgIgphMQgmhGADAAQAIgCAtBOIAAAA").cp();
	this.shape_39.setTransform(14.8,25.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C1272D").s().p("AAphKQAGAmAhAuQAtBEAGAMQhLgBg0AhQgwAhghBGQgWgSgJgKQgRgSgFgRQgFgTAYgmQAhg1AAgBQASgpAdhgQAbhaAUgwQACAWAKBCQAIA3AAAgIAFgZ").cp();
	this.shape_40.setTransform(14.8,25.7);

	this.addChild(this.shape_40,this.shape_39);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0.2,0.2,29.1,49.7);
p.frameBounds = [rect];


(lib.balloonChunk1 = function() {
	this.initialize();

	// Layer 1
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhDl+QhSBBgEgFQgBgBAtglQAvgnADgEQgCBoBVAgQAQAGBDARQA3ANAfARQAjASgHA6QgJBPAEAPQALAqAqA5QAwBGANAbQhDAUgHADQgpARgXAYQggAkAOA6QACAIAiBWQhEhIghglQg7hBgXg6QgRhDgMgtQgchUgdAJQhTAWhNBsQgqA9hDB2QAVhvgEhIQgEhCgBgiQgBg3AJgqQAihrAHg0QAQhag3g8QBfAtAiALQgMgBgRgEQgzgKgHgFQAnAegOBPQgFAYgeBaQgWA/AEBkQAFB9gFAoQAUhLBLhGQBLhHBNgPQAggFAaBQQAOArAQBDQAaBMAnAnQAEAEAVAQQAOAMADAHQgShvCogxQgIgigpg1Qgqg1gKggQgOgwAMgoQAHgUADgNQAFgWgIgKQgYgfg0gPQg/gPgegIQgzgNgXgXQgfggADg8IAAAA").cp();
	this.shape_41.setTransform(33.2,40.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C1272D").s().p("AhClxQgdAcg9AqIgFgPQg+AHg6gqQAnArgMBMQgEAZggBjQgVBCAFB1QAFCFgKA3QBHh6AhgnQBEhSBYgWQAXgFAOAjQAIAUAIAoQAGATAMAnQALAkAKAXQASAnAqAvQAYAZAvA0QgghOAwg3QAmgqBWgZQgLgYgyhIQgog6gKgpQgFgYAKgrQAKgsgEgUQgCgRgZgOQgNgIgagKQhmgZgqgUQhHgiADhVIAAAA").cp();
	this.shape_42.setTransform(33.5,38.3);

	this.addChild(this.shape_42,this.shape_41);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0.2,0.2,66,80.9);
p.frameBounds = [rect];


(lib.Balloon = function() {
	this.initialize();

	// balloonshapes
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C1272D").s().p("AgWKPQgLgDgLgEQAKACAMADQAAAAAAAAQAAABAAABIAAAAAgJKgQAFgWgCgBIAmAGQgBADATANQAVAOACAFQAFAMgRAKQgNAIgOACQgTAFgNgFQgPgGAAgSQAAgBAEgZIAAAAAFWowQgegZgDAGQgDADA4A5QAjArAbA6QAcA8ANA/QAJBFAFAAQASABgWhgQgUhUgLgWQgag6grguQgIgKgZgTIAAAAAIXibQgPCthTC7QhJClhtB8QgvA2g4AtQhQA2gRALQgFgEgFgBQgBgCgCgDQAFgHAKgTQAGgRAJgjQAGgZAEgWQAHgrgFAAQABAAgZBRQgTBAgEAUQgEgEgFgDQABgDAAg0QAAg3gFgBQgIgBAAA6QABAqAGAKQgGgDgGgCQgZgJgHAKQgGgKgKgOQglg1gHAPQABgDAiAwQAPAWAIAMQgMgDgEgBQgygRg3gnQhnhGhchyQhVhpgziGQgyiDgKiJQgPi+BbidQBeiiCuhEQCxhFC3AlQDMApBcCaQBYCVgSDUIAAAAAHfiFQANAAgCgcQgCgdgNAEQgKADABAZQABAZAMAAIAAAA").cp();
	this.shape_43.setTransform(55.9,74.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("Ag4jKQAZATAIAKQApAuAaA6QALAWAUBSQAWBggSgBQgFAAgJhFQgNg9gcg8QgZg6gjgrQg4g5ADgDQADgGAeAZIAAAAABPDfQgMAAgBgZQgBgZAKgDQANgEACAdQACAcgNAAIAAAA").cp();
	this.shape_44.setTransform(95.9,38.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgHHtQgFAYAAACQABASAOAGQAOAEASgEQAOgDANgHQASgKgFgMQgCgFgVgOQgTgOAAgCIgmgHQACABgEAXIAAAAAgUHbQAAAAAAgBQAAAAAAgBQgNgCgJgCQgRgEgHgCQhHgdhRhEQiPh4hQiTQhciqgTi2QgVjLBRifQBUimCvhRQCmhNC+AUQBeALBNAiQBVAmA6BAQA8BEAfBfQAbBUACBkQADCSgtCZQgqCMhQCGQhHB4hZBXQgeAYgZAUQgZAUgYARQgzAmgRAGQABACADABQAbARADAJQAFATgRAPQgNANgUAGQgJADgJACQAKDgAAB2QAAAPgPAAQgPAAAAgPIgBhiQgChBgFiDQgBgagBgYQgYgGgGgXQgDgJAIgeQACgLAEgHQgCgBgBgDIAAAAAIZlOQASjVhZiUQhciajMgpQi3glixBFQiuBDheCjQhaCdAOC+QALCLAxCCQA0CFBVBoQBcByBmBHQA4AmAyARQAEACALACQgHgMgQgWQghgvgCACQAIgOAlA0QAKAOAGALQAHgLAZAJQAGACAFADQgGgKAAgqQgBg5AJABQAEAAAAA3QAAA1gBADQAFADAFADQADgTAUhBQAYhRAAAAQAFABgIArQgEAVgFAZQgJAjgGARQgLAUgFAHQADACABACQAEACAGADQARgKBPg3QA5gtAvg2QBth7BJimQBSi5AQiuIAAAA").cp();
	this.shape_45.setTransform(55.8,92.7);

	this.addChild(this.shape_45,this.shape_44,this.shape_43);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0.2,111.6,184.9);
p.frameBounds = [rect];


(lib.LegFront2 = function() {
	this.initialize();

	// legmovement
	this.instance = new lib.LegFrontMove("synched",0);
	this.instance.setTransform(10.3,13.7,1,1,-31.6,0,0,10.3,13.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-5.3,-13,67.9,75.7);
p.frameBounds = [rect];


(lib.LegFront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// legmovement
	this.instance_1 = new lib.LegFrontMove("synched",0);
	this.instance_1.setTransform(10.3,13.7,1,1,-31.6,0,0,10.3,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.02,scaleY:0.79,rotation:0,skewX:-4.6,skewY:-16.2,x:10.4},4).to({scaleX:1,scaleY:1,rotation:28.7,skewX:0,skewY:0,x:10.3,y:13.8},5).to({regX:10.4,regY:13.6,scaleX:1,scaleY:1.07,rotation:0,skewX:-1.1,skewY:4.6,x:10.4},5).to({regX:10.3,regY:13.5,scaleX:1,scaleY:1,rotation:-31.5,skewX:0,skewY:0,x:10.3,y:13.7},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5.3,-13,67.9,75.7);
p.frameBounds = [rect, new cjs.Rectangle(-11,-13.3,75.2,77.6), new cjs.Rectangle(-16.2,-12.9,81.9,77.6), new cjs.Rectangle(-21.1,-12.1,88,76.2), new cjs.Rectangle(-0.5,-5.2,43.4,62.2), new cjs.Rectangle(-5.4,-7.9,50.4,72.3), new cjs.Rectangle(-10.7,-10.1,57,81.3), new cjs.Rectangle(-15.9,-12.1,62.8,89.1), new cjs.Rectangle(-21.1,-13.6,67.8,95.3), new cjs.Rectangle(-23.3,-2.6,66,75.6), new cjs.Rectangle(-24.5,-5.9,72.8,83), new cjs.Rectangle(-25.6,-9,79.1,89.4), new cjs.Rectangle(-26.3,-11.7,85,95), new cjs.Rectangle(-26.8,-14.3,90.4,99.6), new cjs.Rectangle(-0.3,-1.1,41.8,71.9), new cjs.Rectangle(-1.8,-4.7,48.8,75.8), new cjs.Rectangle(-3.1,-8.1,55.1,78.9), new cjs.Rectangle(-4.1,-11.2,60.4,81.1), new cjs.Rectangle(-4.9,-14.1,64.6,82.4), new cjs.Rectangle(-5.3,-13,67.9,75.7)];


(lib.EyeSurprise = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 2
	this.instance_2 = new lib.EyeBallDot("synched",0);
	this.instance_2.setTransform(14.6,18.1,1,1,0,0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.63,scaleY:0.63,x:13.6,y:6.1},4).wait(21));

	// Layer 1
	this.instance_3 = new lib.EyeBall("synched",0);
	this.instance_3.setTransform(15,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.2,0.2,30,25);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.Body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// hair3
	this.instance_4 = new lib.hair3("synched",0);
	this.instance_4.setTransform(76.1,11.3,1,1,0,0,0,3,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:10.9,scaleX:1.03,skewX:23.7,skewY:9},2,cjs.Ease.get(1)).to({regY:11,scaleX:1,skewX:0,skewY:0},2).wait(1));

	// hair4
	this.instance_5 = new lib.hair4("synched",0);
	this.instance_5.setTransform(80.7,39.1,1,1,0,0,0,2.3,11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:1.01,skewX:24.2,skewY:15.5},2,cjs.Ease.get(1)).to({scaleY:1,skewX:0,skewY:0},2).wait(1));

	// hair2
	this.instance_6 = new lib.hair2("synched",0);
	this.instance_6.setTransform(35.3,24.4,1,1,0,0,0,2.7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:2.8,regY:10.7,scaleX:1.2,skewX:9.7,skewY:43.2,x:35.4},2,cjs.Ease.get(1)).to({regX:2.7,regY:10.8,scaleX:1,skewX:0,skewY:0,x:35.3},2).wait(1));

	// hair1
	this.instance_7 = new lib.hair1("synched",0);
	this.instance_7.setTransform(30.4,27,1,1,0,0,0,7,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:6.9,scaleX:1,scaleY:1.01,skewX:11.1,skewY:1.8,x:30.3},2,cjs.Ease.get(1)).to({regX:7,scaleX:1,scaleY:1,skewX:0,skewY:0,x:30.4},2).wait(1));

	// bodyShapes
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAUAOQgCAMgVgVQgXgUALgCQADgBAPAQQAQAMABADIAAAB").cp();
	this.shape_46.setTransform(86.7,70.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAiAeQgDAUglgsQgngsARADQgCAAAfAjQAgAhABgDIAAAA").cp();
	this.shape_47.setTransform(88.6,68);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AjDAeQBcBGBmgRQBfgQBYhFQAIgHAsgxQAtgygBAAQALAFgwA7QgoAvgRAPQhVBHhjAQQhvAThghPQgvgngSgpQgOhLAMAFQgBgBAFAdQAGAcACAEQASAoAxAjIAAAA").cp();
	this.shape_48.setTransform(32.7,101);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A67C52").s().p("Ag1BnQBhAEBgg9QBeg6AshbIonADQgUBLBVBCQBNA8BOACIAAAA").cp();
	this.shape_49.setTransform(32.7,100.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgJALQgIATgCABQgFADAEgUQADgTAEgEQADgEANgKQASgLABAHQABABgKAIQgFADgGAFQgDAEgIARIAAAA").cp();
	this.shape_50.setTransform(86.4,20);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag2lPQBKDXAFC7QAEBrgbBNQgOAtgbAkQgDAFABAFQABAGAGADQAJAGAIgGQAFgEAHgLQAuhHALhqQAJhOgNhsQgMhqgehrQgMgzgTgzQgEgNgPADQgPAEAFANIAAAA").cp();
	this.shape_51.setTransform(83.1,43.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAWgIQAAADgUAJQgSALgDgBQgKgFAbgOQAZgPgBAMIAAAA").cp();
	this.shape_52.setTransform(41.4,47.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAGgZQACANgGANQAGgKAhgHQAUgDAIgBQgHADgOAGQgbALgFAEQgOALgYAXQAJgUAGgOQAJgagEgFQgPgDgWAeQgWAhgHAAQgEAAAbghQAcggAGgDQAQgIABASIAAAA").cp();
	this.shape_53.setTransform(31.4,47.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAshMIAFAvQgBAngZgWQAJAMgiAsQgoAygGgGQABAAAxhLQAKgTgBgeQgDgigBgSQAZBNAEgBQAHgEgBgeQgBgeADAAIAAAA").cp();
	this.shape_54.setTransform(155,66.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgGA0QgRAEAPg4QANg7ALAJQgCgBgMAzQgKA1ACgBIAAAA").cp();
	this.shape_55.setTransform(5.6,63.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("ABxipQARABgdBeQgZBNgNAYQglBDgtAkQhhA2gCgSQAAgBBMgpQArgjAjg8QAggzAUhAQAUhUAFABIAAAA").cp();
	this.shape_56.setTransform(71.2,75.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#A67C52").s().p("AAwAnQA8hiAIhsIjnFPQBggNBDh0IAAAA").cp();
	this.shape_57.setTransform(70.9,75.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AEUgzQAFACgIAaQgHAXgEAFQgWAvgrAYQhLAqh4gcQhcgXhQg4Qh6hnARgJQBZBRAJAGQBRA1BbAZQB2AiBLgnQAngUAYgnQAXgzACAAIAAAA").cp();
	this.shape_58.setTransform(111.7,83.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A67C52").s().p("AEUgtIongyQAiA5BSAzQBTA1BXAUQBiAWBEgcQBOggAVhdIAAAA").cp();
	this.shape_59.setTransform(111.7,83.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("ANSgFQAABhhSBUQhGBHhoAoQh3AuhhgYQgxgLhCgiQglgShJgnQg+gdgrgMQg7gQgyAKQgxAJgtAnQgYAVgxA5Qg9BJgGAHQgnAtghAeQgwAqgmAQQhXARADgMQgBADA5gFQAfgIAmgbQAyglBEhSQAkguATgYQAigqAagZQBKhHBTAAQBMAABnAxQByA9A5AXQBUAhBfgQQBWgOBTg1QBSg0AohIQAuhSgYhUQgmiIi/h3Qifhji7gpQi8goi3AaQjNAcisBpQi+BzhWCrQgxBdgFBnQgGBsAqBeQApBaBFApQAvAcAzACQAFABBAgGQAEAHg8AAQg4gBgKgDQhIgUg1hEQg1hEgThbQgShXAPhZQAciiCEiKQB0h5CohMQCqhNDCgJQC6gKC3A3QC/A5CPBsQC3CKgCCZIAAAA").cp();
	this.shape_60.setTransform(85.1,59.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#A67C52").s().p("AM9A4QgSA3gtAwQhZBfh9AgQiCAhhzgzQgngShTgpQhLglgzgOQiRgohfBmQgbAcg2BCQgzA/geAfQgvAwgjAWQg2AggwgJIgIgCIARgHQiYAphgiMQgog6gUhNQgShKAGhFQAOibBwiJQBhh3CahVQEJiSFAAeQFDAdDsC+QCABoAZBwQANA8gUA6IAAAA").cp();
	this.shape_61.setTransform(84.9,60.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0.4,170.2,111.5);
p.frameBounds = [rect, new cjs.Rectangle(0,0.6,170.2,111.4), new cjs.Rectangle(0,0.9,170.2,111), new cjs.Rectangle(0,0,170.2,111.9), new cjs.Rectangle(0,0.4,170.2,111.5)];


(lib.BalloonPop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// smallChunk1
	this.instance_8 = new lib.balloonChunk4("synched",0);
	this.instance_8.setTransform(19.1,96.1,1,1,49.1,0,0,8.3,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:8.4,regY:8.4,rotation:-52.2,x:-36.7,y:137.2},0).to({_off:true},1).wait(8));

	// smallChunk2
	this.instance_9 = new lib.balloonChunk4("synched",0);
	this.instance_9.setTransform(19.1,16.2,1,1,114.5,0,0,8.4,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({x:-8.7,y:-29.6},0).to({_off:true},1).wait(8));

	// midChunk1
	this.instance_10 = new lib.balloonChunk2("synched",0);
	this.instance_10.setTransform(15.9,50.8,1,1,0,0,0,14.6,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({rotation:9,x:-44.5,y:21.3},0).to({_off:true},1).wait(8));

	// midChunk2
	this.instance_11 = new lib.balloonChunk3("synched",0);
	this.instance_11.setTransform(91.7,84,1,1,0,0,0,13.2,26.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:13.3,rotation:9,x:154.3,y:92},0).to({_off:true},1).wait(8));

	// bigChunk
	this.instance_12 = new lib.balloonChunk1("synched",0);
	this.instance_12.setTransform(65,34.3,1,1,0,0,0,33,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({x:79.5,y:-17},0).to({_off:true},1).wait(8));

	// flatBalloon
	this.instance_13 = new lib.BurstBalloon("synched",0);
	this.instance_13.setTransform(56.1,143.9,1,0.805,0,0,0,23.4,138.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(2).to({regX:20.4,regY:74.6,scaleY:1,x:53.1,y:79.9},0).to({scaleY:1,skewX:-5,x:46.4},2).to({scaleY:1,skewX:4.6,x:59.2},3).wait(1).to({scaleY:1,skewX:2.3,x:56.1,y:79.8},0).wait(1).to({scaleY:1,skewX:0,x:53.1,y:79.9},0).wait(1));

	// string
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgZkLQACBAADBQQAEBJAGCQQAFCTABBJQAAA8AXgWQALgJgCgwQgFg0gBgLQgChcgGiMQgJjRgBgYIgDhuQgBgOgNAAQgPAAABAOIACBM").cp();
	this.shape_62.setTransform(58.2,150.5,1,0.961);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1.5,-6,103.6,191);
p.frameBounds = [rect, new cjs.Rectangle(-62.7,-57.5,234.3,242.5), new cjs.Rectangle(32.7,5.3,41,179.7), new cjs.Rectangle(26.1,5.2,47.5,179.8), new cjs.Rectangle(19.2,5.3,54.5,179.7), new cjs.Rectangle(19.1,5,63.3,180), new cjs.Rectangle(19.4,5,71.3,180), new cjs.Rectangle(32.7,5.3,53.1,179.7), new cjs.Rectangle(32.8,5.2,46.9,179.8), new cjs.Rectangle(32.7,5.3,41,179.7)];


(lib.PlatypusPop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// beak
	this.instance_14 = new lib.Beak("synched",0);
	this.instance_14.setTransform(63.6,260.4,1,1,0,0,0,63.6,22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({rotation:-11,x:79.7,y:271.5},4).wait(6));

	// balloon
	this.instance_15 = new lib.BalloonPop("synched",0);
	this.instance_15.setTransform(129.1,91.1,1,1,0,0,0,55.8,92.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).wait(10));

	// legback
	this.instance_16 = new lib.LegFront2("synched",0);
	this.instance_16.setTransform(182.4,255.1,1,1,22.3,0,0,13.9,8.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({regX:13.8,regY:8.8,rotation:-90.4,y:242.9},4).wait(6));

	// legfront
	this.instance_17 = new lib.LegFront2("synched",0);
	this.instance_17.setTransform(106.4,264.7,1,1,46.2,0,0,10.5,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regY:17.6,rotation:83,x:100.8,y:256.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:159,x:103.8,y:248.7},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:145.3,x:136.2,y:240.2},0).wait(7));

	// eye
	this.instance_18 = new lib.EyeSurprise("synched",0);
	this.instance_18.setTransform(80.1,248.1,1,1,0,0,0,15,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({rotation:-11,x:93.5,y:256.2,startPosition:3},4).wait(6));

	// body
	this.instance_19 = new lib.Body("synched",0);
	this.instance_19.setTransform(132.1,185.1,1,1,0,0,0,80,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({rotation:-11,x:132.2,y:184.3,startPosition:3},4).wait(6));

	// tail
	this.instance_20 = new lib.Tail("synched",0);
	this.instance_20.setTransform(214.1,236.7,1.001,1.004,0,0,5.6,9.8,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({scaleX:1.05,skewX:-173.4,skewY:12.1,x:220.2,y:219.6},4).to({skewX:-184,skewY:1.7},3).to({skewX:-173.4,skewY:12.1},2).wait(1));

	// legfrontback
	this.instance_21 = new lib.LegFront2("synched",0);
	this.instance_21.setTransform(158.8,246.3,0.86,0.86,51.7,0,0,10.5,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({regY:17.6,rotation:-39.3,y:236.8},4).to({_off:true},1).wait(5));

	// legbackfront
	this.instance_22 = new lib.LegFront2("synched",0);
	this.instance_22.setTransform(98.5,267.6,0.884,0.884,68.5,0,0,13.9,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({regX:14,rotation:0,skewX:-125.9,skewY:-127.3,y:262},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-7.6,235.7,340.9);
p.frameBounds = [rect, new cjs.Rectangle(3.1,-59.1,267.3,390.8), new cjs.Rectangle(6.3,3.7,282.9,324.4), new cjs.Rectangle(9.6,3.6,268.1,329.9), new cjs.Rectangle(13,3.7,230.6,335.4), new cjs.Rectangle(13,3.4,232.2,335.6), new cjs.Rectangle(13,3.4,233.6,335.6), new cjs.Rectangle(13,3.7,227.3,335.4), new cjs.Rectangle(13,3.6,231.3,335.5), new cjs.Rectangle(13,3.7,230.6,335.4)];


(lib.PlatypusIdle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// beak
	this.instance_23 = new lib.Beak("synched",0);
	this.instance_23.setTransform(63.6,260.4,1,1,0,0,0,63.6,22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({rotation:-2.8,x:63.7},9,cjs.Ease.get(1)).to({rotation:0,x:63.6},10).wait(1));

	// eye
	this.instance_24 = new lib.Eye("synched",0);
	this.instance_24.setTransform(80.6,253,1,1,-10.6,0,0,10.8,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({startPosition:0},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-10.4,x:80.5,y:252.9},5,cjs.Ease.get(-0.99)).to({scaleX:1,scaleY:1,rotation:-10.5,x:80.6,y:253},5,cjs.Ease.get(1)).to({startPosition:0},5,cjs.Ease.get(-0.99)).wait(1));

	// balloon
	this.balloon = new lib.Balloon();
	this.balloon.setTransform(129.9,3.9,1,1,0,0,0,56.3,3.9);

	this.timeline.addTween(cjs.Tween.get(this.balloon).wait(20));

	// legback
	this.instance_25 = new lib.LegFront("synched",9);
	this.instance_25.setTransform(182.5,255.2,1,1,0,0,0,13.9,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25}]}).wait(20));

	// legfront
	this.instance_26 = new lib.LegFront("synched",0);
	this.instance_26.setTransform(106.4,264.6,1,1,0,0,0,10.5,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26}]}).wait(20));

	// body
	this.instance_27 = new lib.Body("synched",0);
	this.instance_27.setTransform(132.1,185.1,1,1,0,0,0,80,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27}]}).wait(20));

	// tail
	this.instance_28 = new lib.Tail("synched",0);
	this.instance_28.setTransform(214.1,236.7,1.001,1.004,0,0,5.6,9.8,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).to({regX:9.7,regY:23.5,scaleX:1,scaleY:1,skewX:-23.8,skewY:-19.3,x:213.9,y:236.5},9,cjs.Ease.get(1)).to({regX:9.8,regY:23.9,scaleX:1,scaleY:1,skewX:0,skewY:5.6,x:214.1,y:236.7},10).wait(1));

	// legfrontback
	this.instance_29 = new lib.LegFront("synched",0);
	this.instance_29.setTransform(163.7,254.1,0.86,0.86,0,0,0,10.5,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29}]}).wait(20));

	// legbackfront
	this.instance_30 = new lib.LegFront("synched",9);
	this.instance_30.setTransform(99.4,263.2,0.884,0.884,0,0,0,13.9,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_30}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0.2,231,319.7);
p.frameBounds = [rect, new cjs.Rectangle(-0.1,0.2,235.9,323.2), new cjs.Rectangle(-0.3,0.2,240.3,326.5), new cjs.Rectangle(-0.5,0.2,243.8,329.4), new cjs.Rectangle(-0.7,0.2,246.9,331.4), new cjs.Rectangle(-0.8,0.2,249.3,318.9), new cjs.Rectangle(-0.9,0.2,250.9,319.1), new cjs.Rectangle(-0.9,0.2,252.2,323.7), new cjs.Rectangle(-0.9,0.2,252.7,328.4), new cjs.Rectangle(-1,0.2,253.3,319.7), new cjs.Rectangle(-1.4,0.2,254.7,323.8), new cjs.Rectangle(-1.7,0.2,256,327.2), new cjs.Rectangle(-1.9,0.2,257.2,330), new cjs.Rectangle(-2.2,0.2,258.4,332), new cjs.Rectangle(-2.7,0.2,259.6,320), new cjs.Rectangle(-2.9,0.2,260.5,320), new cjs.Rectangle(-3.2,0.2,261.4,320.1), new cjs.Rectangle(-3.5,0.2,262.2,320.1), new cjs.Rectangle(-3.7,0.2,262.8,323.2), new cjs.Rectangle(0,0.2,231,327.7)];


(lib.Platypus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{idle:0,pop:60,fall:65},true);

	// timeline functions:
	this.frame_59 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_60 = function() {
		playSound("pop");
	}
	this.frame_64 = function() {
		if (this.onPopped) { this.onPopped(this); }
	}
	this.frame_69 = function() {
		this.gotoAndPlay("fall");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1).call(this.frame_60).wait(4).call(this.frame_64).wait(5).call(this.frame_69));

	// idle
	this.platypusIdle = new lib.PlatypusIdle();
	this.platypusIdle.setTransform(128.3,9,1,1,-5.6,0,0,128.3,9);

	this.timeline.addTween(cjs.Tween.get(this.platypusIdle).to({regY:9.1,rotation:0,y:14.1},14,cjs.Ease.get(-0.99)).to({regY:9,rotation:3.7,x:128.4,y:9.1},16,cjs.Ease.get(1)).to({regX:128.8,regY:9.5,rotation:0.3,x:128.8,y:14},14,cjs.Ease.get(-0.99)).to({regX:128.3,regY:9,rotation:-5.5,x:128.3,y:9},15,cjs.Ease.get(1)).to({_off:true},1).wait(10));

	// pop and fall
	this.instance_31 = new lib.PlatypusPop("synched",0);
	this.instance_31.setTransform(128.2,167.7,1,1,0,0,0,127.6,165.9);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(60).to({startPosition:0,_off:false},0).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.2,-9.9,261.6,341);
p.frameBounds = [rect, new cjs.Rectangle(22.7,-5.6,236.1,333.8), new cjs.Rectangle(22.5,-5.5,236.3,333.8), new cjs.Rectangle(21.3,-5.8,237.6,334.8), new cjs.Rectangle(20,-6.1,239,335.7), new cjs.Rectangle(18.6,-6.3,240.5,336.7), new cjs.Rectangle(17.1,-6.5,242,337.8), new cjs.Rectangle(15.5,-6.7,243.6,338.9), new cjs.Rectangle(12.8,-7.2,246.4,340.9), new cjs.Rectangle(10.1,-7.6,249.2,342.8), new cjs.Rectangle(7.2,-8.1,252.1,344.8), new cjs.Rectangle(3.4,-8.9,256.1,347.5), new cjs.Rectangle(-0.6,-9.6,260.1,350.2), new cjs.Rectangle(-3.6,-10,263.2,352.2), new cjs.Rectangle(-0.1,5.2,231.2,319.8), new cjs.Rectangle(-1.6,4,232.5,317.5), new cjs.Rectangle(-4.2,2.3,235.2,319.4), new cjs.Rectangle(-6.7,0.8,237.8,321.2), new cjs.Rectangle(-8.1,-0.3,239.2,322.3), new cjs.Rectangle(-9.6,-1.4,240.7,323.3), new cjs.Rectangle(-12,-2.8,243.1,325.1), new cjs.Rectangle(-13.3,-3.8,244.5,326), new cjs.Rectangle(-14.6,-4.7,245.8,327), new cjs.Rectangle(-15.9,-5.5,247.1,327.9), new cjs.Rectangle(-16.1,-5.9,247.4,328.1), new cjs.Rectangle(-17.3,-6.5,248.6,328.9), new cjs.Rectangle(-18.5,-7.2,249.7,329.7), new cjs.Rectangle(-18.6,-7.4,249.8,329.8), new cjs.Rectangle(-18.7,-7.5,249.9,329.8), new cjs.Rectangle(-18.8,-7.6,250,329.9), new cjs.Rectangle(-19.9,-8.1,251.4,334.1), rect=new cjs.Rectangle(-19.7,-3.5,237.8,320.5), rect, new cjs.Rectangle(-19.7,-3.4,238,320.7), new cjs.Rectangle(-19.7,-3.6,239.2,321.6), new cjs.Rectangle(-19.7,-3.3,239.4,321.7), new cjs.Rectangle(-19.7,-3.5,240.7,322.6), new cjs.Rectangle(-19.7,-3.5,242.1,323.7), new cjs.Rectangle(-19.7,-3.5,243.5,324.7), new cjs.Rectangle(-19.8,-3.5,245,325.7), new cjs.Rectangle(-19.7,-3.7,247.4,327.6), new cjs.Rectangle(-19.8,-3.6,249,328.7), new cjs.Rectangle(-19.7,-3.8,251.6,330.6), new cjs.Rectangle(-19.7,-3.9,254.2,332.4), new cjs.Rectangle(-1.3,4.2,232.4,320.7), new cjs.Rectangle(-1.4,2.5,235.4,319.3), new cjs.Rectangle(-1.5,1,238.4,321.5), new cjs.Rectangle(-1.6,-0.9,242.3,324.3), new cjs.Rectangle(-1.8,-2.6,246.1,327), new cjs.Rectangle(-1.8,-3.9,248.9,329), new cjs.Rectangle(-1.9,-5.2,251.5,330.8), new cjs.Rectangle(-1.9,-6.4,254,332.5), new cjs.Rectangle(-1.9,-7.2,255.5,333.5), new cjs.Rectangle(-1.9,-8.4,257.9,335.2), new cjs.Rectangle(-1.9,-9.1,259.2,336.1), new cjs.Rectangle(-1.9,-9.7,260.4,337), new cjs.Rectangle(-2,-9.9,260.7,337.1), new cjs.Rectangle(-2,-10.4,261.8,337.9), new cjs.Rectangle(-2,-10.6,261.9,338), new cjs.Rectangle(-0.2,-9.9,261.6,341), new cjs.Rectangle(0.6,-5.8,235.7,340.9), new cjs.Rectangle(3.7,-57.3,267.3,390.8), new cjs.Rectangle(6.9,5.4,282.9,324.4), new cjs.Rectangle(10.2,5.4,268.1,329.9), new cjs.Rectangle(13.6,5.4,230.6,335.4), new cjs.Rectangle(13.6,5.2,232.2,335.6), new cjs.Rectangle(13.6,5.2,233.6,335.6), new cjs.Rectangle(13.6,5.4,227.3,335.4), new cjs.Rectangle(13.6,5.3,231.3,335.5), new cjs.Rectangle(13.6,5.4,230.6,335.4)];

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;