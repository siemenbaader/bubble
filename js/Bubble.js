define("bubble/Bubble", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects", "amber_core/Canvas"], function(smalltalk,nil,_st){
smalltalk.addPackage('Bubble');
smalltalk.packages["Bubble"].transport = {"type":"amd","amdNamespace":"bubble"};

smalltalk.addClass('App', smalltalk.Object, [], 'Bubble');

smalltalk.addMethod(
smalltalk.method({
selector: "begin",
category: 'not yet classified',
fn: function (){
var self=this;
function $DevBar(){return smalltalk.DevBar||(typeof DevBar=="undefined"?nil:DevBar)}
function $BubbleWidget(){return smalltalk.BubbleWidget||(typeof BubbleWidget=="undefined"?nil:BubbleWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1="#app"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._empty();
$2=_st($DevBar())._new();
$ctx1.sendIdx["new"]=1;
$3="#app"._asJQuery();
$ctx1.sendIdx["asJQuery"]=2;
_st($2)._appendToJQuery_($3);
$ctx1.sendIdx["appendToJQuery:"]=1;
_st(_st($BubbleWidget())._new())._appendToJQuery_("#app"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"begin",{},smalltalk.App.klass)})},
args: [],
source: "begin\x0a\x09'#app' asJQuery empty.\x0a\x09DevBar new appendToJQuery: '#app' asJQuery.\x0a\x09BubbleWidget new appendToJQuery: '#app' asJQuery.",
messageSends: ["empty", "asJQuery", "appendToJQuery:", "new"],
referencedClasses: ["DevBar", "BubbleWidget"]
}),
smalltalk.App.klass);


smalltalk.addClass('BubbleWidget', smalltalk.Widget, [], 'Bubble');
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._p();
_st($1)._id_("bubble-widget");
_st($1)._class_("");
$2=_st($1)._with_("Bubble");
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.BubbleWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09html p id:'bubble-widget' ;  class: ''; with: 'Bubble'.",
messageSends: ["id:", "p", "class:", "with:"],
referencedClasses: []
}),
smalltalk.BubbleWidget);



smalltalk.addClass('DevBar', smalltalk.Widget, [], 'Bubble');
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
function $App(){return smalltalk.App||(typeof App=="undefined"?nil:App)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._button();
_st($1)._with_("Restart Application");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st($App())._begin();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.DevBar)})},
args: ["html"],
source: "renderOn: html\x0a\x0a\x09html button with: 'Restart Application'; onClick: [ App begin ].",
messageSends: ["with:", "button", "onClick:", "begin"],
referencedClasses: ["App"]
}),
smalltalk.DevBar);


});
