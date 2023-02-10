const taglineElement = document.querySelector('.hero__tagline')
const titleElement = document.querySelector('.hero__title')
const subtitleElement = document.querySelector('.hero__subtitle')

const settings = location.search.slice(1,location.search.length).split('&').map(i => i.split('=')).reduce((acc, cur) => Object.assign(acc, {[cur[0]]: decodeURI(cur[1])}), {})

for (key in settings) {
	if (key === 'tags') {
		taglineElement.innerHTML = '#' + settings[key].split(',').join(' #')
	}
	if (key === 'title') {
		titleElement.innerHTML = settings[key]
	}
}

const date = new Date()

subtitleElement.innerHTML = `${date.getDate()}.${JSON.stringify(date.getMonth() + 1).length === 1 ? '0' + (date.getMonth() + 1) : date.getMonth()}.${date.getUTCFullYear()}`
