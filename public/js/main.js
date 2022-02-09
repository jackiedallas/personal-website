$(document).ready(function () {
	
	const techSkills = document.querySelectorAll('.tech-skills');
	const softSkills = document.querySelectorAll('.soft-skills');
	
	// tech observer start
	const techObserver = new IntersectionObserver(entries => {
		// console.log(entries);
		// entries.target.classList.toggle('appear', entries.isIn)
		entries.forEach(entry => {
			entry.target.classList.toggle('show-tech', entry.isIntersecting)
		})
	},{
		rootMargin: '-100px'
	})

	techSkills.forEach(skill => {
		techObserver.observe(skill);
	})
	// tech observer end
	
	// soft observer start
	const softObserver = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			entry.target.classList.toggle('show-soft', entry.isIntersecting)
		})
	},{
		rootMargin: '-100px'
	})
	
	softSkills.forEach(skill => {
		softObserver.observe(skill)
	})
	// soft observer end
})

