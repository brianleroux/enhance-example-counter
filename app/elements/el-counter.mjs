// single file component !
export default function counter ({ html, state }) {
  return html`
    <form action=/count method=post>
      <button>+1</button>
    </form>
    <pre>${ JSON.stringify(state.store, null, 2) }</pre>
    <script type=module src=/_static/counter.mjs></script>
  `
}
