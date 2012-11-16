/**
 * @author Mr.zheng
 * @describe    全局配置文件
 */
var config = config || {};
config.Global = (function () {
      //源路径
      var sourceUrl="../js/";
      //帧频
      var fps=24;
      var getCreateJSScript=function(){
            $("<script src='../js/vendor/jquery-ui-1.9.1.custom.min.js'/>").appendTo("head");
            $("<script src='../js/vendor/easeljs-0.5.0.min.js'/>").appendTo("head");
            $("<script src='../js/vendor/tweenjs-0.3.0.min.js'/>").appendTo("head");
            $("<script src='../js/vendor/movieclip-0.5.0.min.js'/>").appendTo("head");
            $("<script src='../js/vendor/preloadjs-0.2.0.min.js'/>").appendTo("head");
            $("<script src='../js/vendor/soundjs-0.3.0.min.js'/>").appendTo("head");
      }
      //基础样式
      var getBaseCss=function(){
            $("<link rel='stylesheet' href='../css/pageStyle.css' />").appendTo("head");
      }
      //jquery样式
      var getJQueryUICss=function(){
            $("<link rel='stylesheet' href='../css/smoothness/jquery-ui-1.9.1.custom.min.css'/>").appendTo("head");
      }
      //基础包
      var getICS3BaseScript=function(){
            $("<script src='../js/iCS3Base-0.1.0.js'/>").appendTo("head");
      }
      //工具包
      var getUtilsScript=function(){
            $("<script src='../js/utils/displayControlUtil-0.1.0.js'/>").appendTo("head");
      }
      return {
            "fps":fps,
            "sourceUrl":sourceUrl,
            "getCreateJSScript":getCreateJSScript,
            "getICS3BaseScript":getICS3BaseScript,
            "getUtilsScript":getUtilsScript,
            "getBaseCss":getBaseCss,
            "getJQueryUICss":getJQueryUICss};
})();