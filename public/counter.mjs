export class Counter extends HTMLElement {

  constructor () {
    super()
    const template = document.getElementById('el-counter-template')
    this.replaceChildren(template.content.cloneNode(true))
    this.form = this.querySelector('form')
    this.pre = this.querySelector('pre')
    this.form.addEventListener('submit', this.addOne.bind(this))
  }

  async addOne(e) {
    e.preventDefault()
    let res = await fetch('/count', {
      headers: {
        'accept': 'application/json'
      },
      method: 'post'
    })
    let json = await res.json()
    this.pre.innerHTML = JSON.stringify(json, null, 2)
  }
}

customElements.define('el-counter', Counter)
