const page = document.querySelector('.page');
const toggleSwitchTop = document.querySelector('.toggle__theme');

// No theme transition on start
window.addEventListener('load', () => {
	if (!localStorage.getItem('aisucks-animation') ||
	localStorage.getItem('aisucks-animation') === 'on') {
		page.classList.remove('no-animation');
	} else {
		page.classList.add('no-animation');
	}
});

// Switch theme function
function switchTheme(state) {
	if (state === 'dark') {
		page.classList.add('dark');
		localStorage.setItem('aisucks-theme', 'dark');
		// Toggle style state
		toggleSwitchTop.classList.add('toggle__theme_dark');
	} 
	else if (state === 'light') {
		page.classList.remove('dark');
		localStorage.setItem('aisucks-theme', 'light');
		// Toggle style state
		toggleSwitchTop.classList.remove('toggle__theme_dark');
	}
}

// Sync last user choice
if (localStorage.getItem('aisucks-theme') === 'dark') {
	switchTheme('dark');
} 
// else if (localStorage.getItem('aisucks-theme') === 'light') {
// 	switchTheme('light');
// }
// Sync os setting
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	switchTheme('dark');
} 
// else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
// 	switchTheme('light');
// }

// Check theme switch real time
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
	const newColorScheme = event.matches ? 'dark' : 'light';
	if (newColorScheme === 'dark') {
		switchTheme('dark');
	}
	if (newColorScheme === 'light') {
		switchTheme('light');
	} 
});

// Theme toggles
toggleSwitchTop.addEventListener('click', () => {
	if (!localStorage.getItem('aisucks-theme') || 
	localStorage.getItem('aisucks-theme') === 'light') {
		switchTheme('dark');
	} else if (localStorage.getItem('aisucks-theme') === 'dark' || 
	toggleSwitchTop.classList.contains === 'toggle__theme_dark') {
		switchTheme('light');
	}
});
