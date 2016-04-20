var video_out = document.getElementById("vid-box");

function login(form) {
	var phone = window.phone = PHONE({
	    number        : form.username.value || "Anonymous", // listen on username line else Anonymous
	    publish_key   : 'pub-c-74b9eee0-4fde-418c-b25d-b733043b64fa',
	    subscribe_key : 'sub-c-f383feb0-0659-11e6-8c3e-0619f8945a4f',
	});
	phone.ready(function(){ form.username.style.background="#55ff5b"; });
	phone.receive(function(session){
	    session.connected(function(session) { video_out.appendChild(session.video); });
	    session.ended(function(session) { video_out.innerHTML=''; });
	});
	return false; 	// So the form does not submit.
}

function makeCall(form){
	if (!window.phone) alert("Login First!");
	else phone.dial(form.number.value);
	return false;
}
