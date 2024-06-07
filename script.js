const rootElem = document.documentElement;

let newtheme, dataTheme;
console.log(rootElem);

// | THEME SWITCH FUNCTION
const switchTheme = () => {
	dataTheme = rootElem.getAttribute('data-theme');
	console.log(dataTheme);
	if (dataTheme === 'dark') {
		newtheme = 'light';
	} else {
		newtheme = 'dark';
	}
	rootElem.setAttribute('data-theme', newtheme);

	localStorage.setItem('theme', newtheme);
};

document.querySelector('label').addEventListener('click', switchTheme);
