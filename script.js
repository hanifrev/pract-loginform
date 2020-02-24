		const loginbut = document.querySelector('.btn');
		loginbut.addEventListener('click', function () {
			alert('Sorry, this site is under constructions');
		})

		// document.querySelector('#but').onmouseover = function() {
		// 	mouseOver()
		// };
		// function mouseOver() {

		// }

		const loglog = document.querySelector('#but');
		loglog.addEventListener('mouseover', function(){
			loglog.style.color = 'red';
		})
		const loglogout = document.querySelector('#but');
		loglogout.addEventListener('mouseout', function(){
			loglogout.style.color = 'white';
		})

		const signuplog = document.querySelector('.signup');
		signuplog.addEventListener('mouseover', function(){
			signuplog.style.color = 'red';
		})
		const signuplog1 = document.querySelector('.signup');
		signuplog1.addEventListener('mouseout', function(){
			signuplog1.style.color = 'yellow';
		})
