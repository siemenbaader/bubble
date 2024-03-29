Smalltalk current createPackage: 'Bubble'!
Object subclass: #App
	instanceVariableNames: ''
	package: 'Bubble'!

!App class methodsFor: 'not yet classified'!

begin
	'#app' asJQuery empty.
	DevBar new appendToJQuery: '#app' asJQuery.
	BubbleWidget new appendToJQuery: '#app' asJQuery.
! !

Widget subclass: #BubbleWidget
	instanceVariableNames: ''
	package: 'Bubble'!

!BubbleWidget methodsFor: 'not yet classified'!

renderOn: html
	html p id:'bubble-widget' ;  class: ''; with: 'Bubble'.
! !

Widget subclass: #DevBar
	instanceVariableNames: ''
	package: 'Bubble'!

!DevBar methodsFor: 'not yet classified'!

renderOn: html

	html button with: 'Restart Application'; onClick: [ App begin ].
! !

Object subclass: #Websocket
	instanceVariableNames: 'onMessage ws'
	package: 'Bubble'!

!Websocket methodsFor: 'not yet classified'!

connect: url
	< 
	self['@ws'] = new WebSocket( url );
	>
!

onMessage: block
	< self['@ws'].onmessage = block; >
!

sendMessage: aString
	ws send: aString.
! !

