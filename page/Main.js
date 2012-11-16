var canvas, stage, exportRoot, circle, container;
$(document).ready(function () {
      // 初始化
      var ics3BaseMain = new iCS3Base.BaseMain();
      ics3BaseMain.createBaseObj();
      var manifest = [{
            src: "libs/sounds/pop.mp3",
            id: "pop"
      }];
      var loader = new createjs.PreloadJS(false);
      loader.installPlugin(createjs.SoundJS);
      loader.onComplete = handleComplete;
      loader.loadManifest(manifest);
});
function handleComplete () {
      canvas = document.getElementById("baseCanvas");
      stage = new createjs.Stage(canvas);

      circle = new lib.CircleMc();
      container = new createjs.Container();
      container.addChild(circle);
      stage.addChild(container);

      $("#myDiv").dialog();

      var platypus = new lib.Platypus();
      stage.addChild(platypus);

      displayControlUtil.DragControl.preventDomTouchEvent(canvas);
      displayControlUtil.DragControl.startDrag(circle);
      displayControlUtil.DragControl.startDrag(platypus,function(){ platypus.gotoAndPlay("pop");});

      var txt = new createjs.Text("hello", "36px Arial", "#FFF");
      stage.addChild(txt);

      createjs.Ticker.setFPS(config.Global.fps);
      createjs.Ticker.addListener(stage);
      createjs.Touch.enable(stage, true, true);
      
}
function playSound (name, loop) {
      createjs.SoundJS.play(name, createjs.SoundJS.INTERRUPT_EARLY, 0, 0, loop);
}
