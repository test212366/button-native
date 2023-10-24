class ModernButton extends Button {
	constructor(borderR) {
		super()
		this.borderRadius = borderR
	}
	renderTwo() {
		super.render(this.borderRadius)
	}
}

const modern = new ModernButton('20px')

modern.renderTwo()
