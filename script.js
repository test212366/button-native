class Button {
	constructor(width, height, background, value) {
		[this.width, this.height, this.background, this.value] = [width, height, background, value]
	}

	render(b = '0px') {
		let button = document.createElement('button')
		button.style.backgroundColor = this.background
		button.textContent = this.value
		button.style.height = this.height
		button.style.width = this.width
		button.style.borderRadius = b
		const body = document.body
		body.appendChild(button)
	}
}
const mybutton = new Button('100px', '100px', '#000', 'ninini')
mybutton.render()
