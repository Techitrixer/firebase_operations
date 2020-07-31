var databaseRef = firebase.database().ref('table1/');

function jrs_contact(){
	var field1 = document.getElementById('field1').value;
	var field2 = document.getElementById('field2').value;

	var uid = firebase.database().ref().child('table1').push().key;

	var data = {
		user_id: uid,
		field1: field1,
		field2: field2
	}

	var updates = {};
	updates['/table1/' + uid] = data;
	firebase.database().ref().update(updates);

	reload_page();
}