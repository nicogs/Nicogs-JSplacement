class MyNavbar extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: "open"} );
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadow.innerHTML = `
		
		`;
	}
}

customElements.define("my-navbar", MyNavbar);