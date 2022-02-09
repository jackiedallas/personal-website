$(document).ready(function () {
	
	const techSkills = document.querySelectorAll('.tech-skills');
	
	const observer = new IntersectionObserver(entries => {
		console.log(entries);
		// entries.target.classList.toggle('appear', entries.isIn)
		entries.forEach(entry => {
			entry.target.classList.toggle('show', entry.isIntersecting)
		})
	},{
		// threshold: 1
		rootMargin: '-100px'
	})

	techSkills.forEach(skill => {
		observer.observe(skill);
	})
})

