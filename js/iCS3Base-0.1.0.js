var iCS3Base;
(function (iCS3Base) {
  (iCS3Base.BaseMain = function () {
    // 创建基本对象
    this.createBaseObj = function () {
      $("<div><canvas id='baseCanvas' width='1024' height='768'/></div>")
          .appendTo("body");
      var canvas = $("canvas")[0];
    }
  })
})(iCS3Base =iCS3Base || {});