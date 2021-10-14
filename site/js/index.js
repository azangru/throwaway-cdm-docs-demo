import { LitElement, html, css } from 'https://unpkg.com/lit@2.0.2/index.js?module';

export class Search extends LitElement {

  static styles = css`
    :host {
      position: relative;
      display: block;
      width: 200px;
    }

    * {
      box-sizing: border-box;
    }

    input {
      width: 200px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .matches {
      position: absolute;
      left: 0;
      bottom: 0;
      top: 100%;
      width: 100%;
      height: fit-content;
      overflow-x: hidden;
      font-size: 16px;
      padding: 0.6rem;
      border: 1px solid rgb(229, 231, 235);
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    }
  
  `;

  static properties = {
    index: { state: true },
    matches: { state: true }
  };

  constructor() {
    super();

    this.matches = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchIndex();
  }

  async fetchIndex() {
    const rawIndex = await fetch("/search-index.json")
      .then((response) => response.json());
    this.index = lunr.Index.load(rawIndex);
  }

  search = (event) => {
    const query = event.target.value;
    if (!query) {
      this.matches = [];
    }
    this.matches = this.index.search(query);
  }

  render() {
    console.log('render', this.index);
    if (!this.index) {
      return null;
    }
    return html`
      <input @input=${this.search} id="search-field" placeholder="search" />
      ${ this.matches.length ? this.renderMatches() : null }
    `;
  }

  renderMatches() {
    return html`
      <ul class="matches">
        ${ this.matches.map(match => html`
          <li>
            <a href="${match.ref}">${match.ref}</a>
          </li>
        `)}
      </ul>
    `;
  }
}

customElements.define('x-search', Search);

