/**
 * @author XRS
 * @describe
 */
var displayControlUtil = displayControlUtil || {};
displayControlUtil.DragControl = (function() {
	/**
	 * @param dp  拖拽对象
	 * @param mouseUp 鼠标拿起方法
	 */
	var startDrag = function(dp, mousePress, mouseMove, mouseUp) {
		dp.onPress = function(e) {
			var mouseX = e.stageX;
			var mouseY = e.stageY;
			if(mousePress)mousePress(e);
			dragObj.push(dp);
			e.onMouseMove = function(ev) {
				dp.x += ev.stageX - mouseX;
				dp.y += ev.stageY - mouseY;
				mouseX = ev.stageX;
				mouseY = ev.stageY;
				if(mouseMove)mouseMove(ev);
			}
			e.onMouseUp = function(ev){
			      if(mouseUp)mouseUp(ev);
			      var index=dragObj.indexOf(dp);
			      dragObj.splice(index,1);
			}
		}
	}
	//停止拖拽
	var stopDrag = function(dp) {
		dp.onPress = null;
	}
	//侦听dom touch事件
	var preventDomTouchEvent=function(domObj){
	      domObj.addEventListener("touchstart",onDomTouch);
	      domObj.addEventListener("touchmove",onDomTouch);
	      domObj.addEventListener("touchend",onDomTouch);
	}
	var onDomTouch=function(e){
	      if(dragObj.length>0)e.preventDefault();
	}
	//移除dom touch事件侦听
	var passDomTouchEvent=function(domObj){
	      domObj.removeEventListener("touchstart",onDomTouch);
	      domObj.removeEventListener("touchmove",onDomTouch);
	      domObj.removeEventListener("touchend",onDomTouch);
	}
	//拖拽对象
	var dragObj=[];
	return {
		"startDrag" : startDrag,
		"stopDrag" : stopDrag,
		"dragObj":dragObj,
		"preventDomTouchEvent":preventDomTouchEvent,
		"passDomTouchEvent":passDomTouchEvent
	};
})(); 