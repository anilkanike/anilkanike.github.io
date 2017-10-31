function MenuItem(){this.parent=void 0,this.element=void 0,this.data=void 0}function setProperties(e,t){for(var n in t)if(0==n.indexOf("child:")){for(var i=n.substr(6).split(":"),a=e,o=0;o<i.length;o++)a=$(a).children().eq(i[o]);void 0!=t[n].tag&&(a=$(a).find(t[n].tag)),setProperties(a,t[n].properties)}else"animate"!=n&&"duration"!=n&&("style"==n?t[n].length?$(e).attr(n,t[n]):$(e).removeAttr(n):$(e).css(n,t[n]))}function Menu(){this.items=[]}function createMenuItem(e){var t=void 0!=e&&void 0!=e.menuItemClass?e.menuItemClass:"MenuItem";return new window[t]}function createMenu(e){var t=void 0!=e&&void 0!=e.menuClass?e.menuClass:"Menu";return new window[t]}function setupMenu(e){if(menuData=getMenuData(e),void 0==menuData)return!1;var t=menuData.items,n=createMenu(menuData),i=$(e).parent(),a=$(i).data("item-data");void 0!=a&&(a.subMenu=n),n.setData(menuData,e);var o=!0;return $(e).children("li").each(function(){var e=createMenuItem(t);e.setData(t,this),n.items.push(e),$(this).children("ul").each(function(){setupMenu(this)||(o=!1)}),e.addEvents()}),n.addEvents(),o}function closeMenu(e){$(e).children().each(function(){var e=$(this).data("item-data");void 0!=e&&(void 0!=e.subMenu&&closeMenu($(this).children("ul")),e.animate("hover_out"),e.restore())})}function getMenuData(e){var t=void 0,n=$(e).attr("class").split(/\s+/);return $.each(n,function(e,n){return t=getMenuDataForClass(n),void 0!=t?!1:void 0}),t}function getMenuDataForClass(e){return menuClasses[e]}function registerMenuClass(e,t){menuClasses[e]=t}function initMenu(e){return setupMenu(e)?!0:!1}function currentDevice(){var e=$(".menu-device").css("background-color"),t=void 0!=e?parseInt(e.substring(4)):0;return t}function show(e){$(e).each(function(){"none"==$(this).css("display")&&$(this).css("display","block")}),void 0==show.id&&(show.id=0),++show.id,$(document).on("touchend.menu."+show.id,function(e,t){return function(n){for(var i=$(e).data("item-data"),a=e;void 0!=i.parent;)i=i.parent,a=i.element;a.contains(n.target)||(t>show.id||(closeMenu(a),show.id=t-1),$(document).off("touchend.menu."+t))}}(e,show.id))}MenuItem.prototype.setData=function(e,t){this.data=e,this.element=t,parentElement=$(t).parent();var n=$(parentElement).data("item-data");this.parent=void 0!=n?n:void 0,$(t).data("item-data",this)};var menuItemIgnoreClickEvents=!1;MenuItem.prototype.addEvents=function(){var e=function(e){if(0==menuItemIgnoreClickEvents&&"touchstart"==e.type)menuItemIgnoreClickEvents=!0;else if(1==menuItemIgnoreClickEvents&&"click"==e.type)return;for(var t=e.target,n=$(t).data("item-data");void 0==n&&void 0!=t;)t=t.parentElement,n=$(t).data("item-data");if(t==this||"A"==this.nodeName)if(e.stopPropagation(),void 0!=n.subMenu){var i=n.parent?n.parent.element:void 0;"none"==$(n.subMenu.element).css("display")?(n.hoverIn.call(n.element,e),n.expand()):void 0!=i&&setTimeout(function(e){return function(){closeMenu(e)}}(i),50)}else{for(var i;void 0!=n.parent;)i=n.parent.element,n=n.parent;setTimeout(function(e){return function(){closeMenu(e)}}(i),50)}},t=this.element,n=this.subMenu;void 0!=this.data.hover?($(t).hover(this.hover),void 0==n&&$(t).on("touchstart",this.hover)):void 0!=this.data.hover_in&&void 0!=this.data.hover_out&&($(t).hover(this.hoverIn,this.hoverOut),$(t).on("touchstart",void 0!=n?e:this.hoverIn),void 0==n&&$(t).on("touchend",e)),$(t).on("click",e)},MenuItem.prototype.getAnimationProperties=function(e,t){if(void 0==e)return void 0;void 0==this.values&&(this.values={});var n=currentDevice();if(void 0==this.values[n]){var i=this.element;this.values[n]={width:$(i).width(),height:$(i).height(),marginLeft:$(i).css("margin-left"),marginTop:$(i).css("margin-top")}}for(var a=this,i=a.element;void 0!=a.parent;)a=a.parent,i=a.element;for(var o=n;void 0!=e&&o>=0&&void 0==e[o];)--o;0>o||void 0==e||(e=e[o]);var r=$.extend({},e);return"initial"==r.width?r.width=this.values[n].width:"+dx"==r.width?r.width=parseInt(this.values[n].width)+parseInt(t.dx)+"px":"-dx"==r.width&&(r.width=parseInt(this.values[n].width)-parseInt(t.dx)+"px"),"initial"==r.height?r.height=this.values[n].height:"+dy"==r.height?r.height=parseInt(this.values[n].height)+parseInt(t.dy)+"px":"-dy"==r.height&&(r.height=parseInt(this.values[n].height)-parseInt(t.dy)+"px"),"dx"==r.left&&(r.left=t.dx+"px"),"dy"==r.top&&(r.top=t.dy+"px"),"initial"==r["margin-left"]?r["margin-left"]=this.values[n].marginLeft:"+dx"==r["margin-left"]?r["margin-left"]=parseInt(this.values[n].marginLeft)+parseInt(t.dx)+"px":"-dx"==r["margin-left"]&&(r["margin-left"]=parseInt(this.values[n].marginLeft)-parseInt(t.dx)+"px"),"initial"==r["margin-top"]?r["margin-top"]=this.values[n].marginTop:"+dy"==r["margin-top"]?r["margin-top"]=parseInt(this.values[n].marginTop)+parseInt(t.dy)+"px":"-dy"==r["margin-top"]&&(r["margin-top"]=parseInt(this.values[n].marginTop)-parseInt(t.dy)+"px"),r},MenuItem.prototype.animate=function(e,t,n){var i=this,a=i.element,o=void 0!=n&&void 0!=n.queue?n.queue:"fx";if(void 0!=i.data[e].before&&setProperties(a,i.getAnimationProperties(i.data[e].before,n)),void 0==t&&(t=i.data[e].delay),void 0!=t&&t>0?(alert(t),setTimeout(function(){$(a).stop(o,!0).animate(i.getAnimationProperties(i.data[e].properties,n),{duration:1==i.data[e].animate?i.data[e].duration:0,queue:o,complete:function(){return function(){void 0!=properties&&setProperties(this,properties)}}(i.getAnimationProperties(i.data[e].after,n)),step:function(e){return function(){void 0!=e&&setProperties(this,e)}}(i.getAnimationProperties(i.data[e].step,n))}).dequeue(o)},t)):$(a).stop(o,!0).animate(i.getAnimationProperties(i.data[e].properties,n),{duration:1==i.data[e].animate?i.data[e].duration:0,queue:o,complete:function(e){return function(){void 0!=e&&setProperties(this,e)}}(i.getAnimationProperties(i.data[e].after,n)),step:function(e){return function(){void 0!=e&&setProperties(this,e)}}(i.getAnimationProperties(i.data[e].step,n))}).dequeue(o),void 0!=i.data[e].content&&(t=i.data[e].content.delay,i.animateContent(i.data[e].content.event,t,n)),void 0!=i.data[e].submenu){var r=i.data[e].submenu.event;t=i.data[e].submenu.delay,void 0!=i.subMenu&&("function"==typeof i.subMenu[r]?void 0!=t&&t>0?setTimeout(function(){i.subMenu[r].call(i.subMenu.element)},t):i.subMenu[r].call(i.subMenu.element):i.subMenu.animate(r,t,n))}if(void 0!=i.data[e].parentmenu){var s=i.data[e].parentmenu.event;t=i.data[e].parentmenu.delay,void 0!=i.parent&&("function"==typeof i.parent[s]?void 0!=t&&t>0?(alert(t),setTimeout(function(){i.parent[s].call(i.parent.element)},t)):i.parent[s].call(i.parent.element):i.parent.animate(s,t,n))}},MenuItem.prototype.animateContent=function(e,t,n){var i=this;void 0==t&&(t=i.data.content[e].delay),void 0!=t&&t>0?(alert(t),setTimeout(function(){i.doAnimateContent(e,n)},t)):i.doAnimateContent(e,n)},MenuItem.prototype.doAnimateContent=function(e,t){var n=this,i=n.element,a=$(i).children().first().find(".menu-content");0==a.length&&(a=$(i).children().first());var o=n.data.content[e];void 0!=o.before&&setProperties(a,n.getAnimationProperties(o.before,t));var r=void 0!=t&&void 0!=t.queue?t.queue:"fx";$(a).stop(r,!0).animate(n.getAnimationProperties(o.properties,t),{duration:1==o.animate?o.duration:0,queue:r,complete:function(e){return function(){void 0!=e&&setProperties(this,e)}}(n.getAnimationProperties(o.after,t)),step:function(e){return function(){void 0!=e&&setProperties(this,e)}}(n.getAnimationProperties(o.step,t))}).dequeue(r);for(var s in o)if(0==s.indexOf("child:")){for(var u=s.substr(6).split(":"),d=a,p=0;p<u.length;p++)d=$(d).children().eq(u[p]);void 0!=o[s].tag&&(d=$(d).find(o[s].tag)),$(d).stop(r,!0).animate(n.getAnimationProperties(o[s].properties,t),{duration:1==o.animate?void 0!=o[s].duration?o[s].duration:o.duration:0,queue:r,complete:function(e){return function(){void 0!=e&&setProperties(this,e)}}(n.getAnimationProperties(o[s].after,t)),step:function(e){return function(){void 0!=e&&setProperties(this,e)}}(n.getAnimationProperties(o[s].step,t))}).dequeue(r)}},MenuItem.prototype.hover=function(){if(0!=$(this).height()){var e=$(this).data("item-data");e.animate("hover")}},MenuItem.prototype.hoverIn=function(e){if((!menuItemIgnoreClickEvents||"mouseenter"!=e.type)&&0!=$(this).height()){var t=$(this).data("item-data");t.animate("hover_in"),t.expand()}},MenuItem.prototype.hoverOut=function(){if(0!=$(this).height()){var e=$(this).data("item-data");e.animate("hover_out"),e.restore()}},MenuItem.prototype.expand=function(){var e=this,t=e.element,n=$(t).attr("data-anim");if(void 0!=n){var i=n.split(";"),a=currentDevice();if(a<i.length){var o=i[a];if(o.length>0){var r,s=o.split(":"),u=s[0];if("push_right"==u){var d=s[2];0>d&&(u+="_move_up"),r={dx:s[1],dy:d}}else if("push_left"==u){var d=s[2];0>d&&(u+="_move_up"),r={dx:s[1],dy:d}}else if("push_up"==u){var p=s[1];0>p&&(u+="_move_left"),r={dx:p,dy:s[2]}}else if("push_down"==u){var p=s[1];0>p&&(u+="_move_left"),r={dx:p,dy:s[2]}}else if("expand_up"==u){var p=s[1];0>p&&(u+="_move_left"),r={dx:p,dy:s[2]}}else if("expand_down"==u){var p=s[1];0>p&&(u+="_move_left"),r={dx:p,dy:s[2]}}else if("expand_right"==u){var d=s[2];0>d&&(u+="_move_up"),r={dx:s[1],dy:d}}else if("expand_left"==u){var d=s[2];0>d&&(u+="_move_up"),r={dx:s[1],dy:d}}$.extend(r,{queue:"alt_fx"}),e.animate(u,0,r)}}}},MenuItem.prototype.restore=function(){var e=this,t=e.element,n=$(t).attr("data-anim");if(void 0!=n){var i=n.split(";"),a=currentDevice();if(a<i.length){var o=i[a];if(o.length>0){var r,s=o.split(":"),u=s[0];if("push_right"==u){u="pull_left";var d=s[2];0>d&&(u+="_move_down"),r={dx:s[1],dy:d}}else if("push_left"==u){u="pull_right";var d=s[2];0>d&&(u+="_move_down"),r={dx:s[1],dy:d}}else if("push_up"==u){u="pull_down";var p=s[1];0>p&&(u+="_move_right"),r={dx:p,dy:s[2]}}else if("push_down"==u){u="pull_up";var p=s[1];0>p&&(u+="_move_right"),r={dx:p,dy:s[2]}}else if("expand_up"==u){u="shrink_down";var p=s[1];0>p&&(u+="_move_right"),r={dx:p,dy:s[2]}}else if("expand_down"==u){u="shrink_up";var p=s[1];0>p&&(u+="_move_right"),r={dx:p,dy:s[2]}}else if("expand_right"==u){u="shrink_left";var d=s[2];0>d&&(u+="_move_down"),r={dx:s[1],dy:d}}else if("expand_left"==u){u="shrink_right";var d=s[2];0>d&&(u+="_move_down"),r={dx:s[1],dy:d}}$.extend(r,{queue:"alt_fx"}),e.animate(u,0,r)}}}},MenuItem.prototype.show=function(){var e=$(this).data("item-data");show(this),e.animate("show")},MenuItem.prototype.hide=function(){var e=$(this).data("item-data");e.animate("hide")},Menu.prototype=new MenuItem,Menu.prototype.animateContent=function(e,t){for(var n in this.items){var i=this.items[n];i.animateContent(e,t)}};var menuClasses={};
