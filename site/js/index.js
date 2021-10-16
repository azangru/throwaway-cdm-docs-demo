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

    input, matches {
      font-size: 16px;
    }

    input {
      width: 100%;
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
      top: calc(100% + 6px);
      width: 100%;
      height: fit-content;
      overflow-x: hidden;
      font-size: 16px;
      padding: 0.6rem;
      border: 1px solid rgb(229, 231, 235);
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    }

    li {
      padding: 0.4rem 0;
    }

    a, a:visited, a:active {
      color: var(--link-color)
    }
  
  `;

  static properties = {
    index: { state: true },
    articleTitles: { state: true },
    matches: { state: true }
  };

  constructor() {
    super();

    this.matches = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchData();
  }

  async fetchData() {
    await Promise.all([
      this.fetchIndex(),
      this.fetchArticleTitles()
    ]);
  }

  async fetchIndex() {
    const rawIndex = await fetch("/search-index.json")
      .then((response) => response.json());
    this.index = lunr.Index.load(rawIndex);
  }

  async fetchArticleTitles() {
    const articleTitles = await fetch("/atricle-titles.json")
      .then((response) => response.json());
    this.articleTitles = articleTitles;
  }

  search = (event) => {
    const query = event.target.value;
    console.log('query', query);
    if (!query) {
      console.log('here?');
      this.matches = [];
    } else {
      this.matches = this.index.search(query);
    }
  }

  render() {
    if (!this.index || !this.articleTitles) {
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
            <a href="${match.ref}">${this.articleTitles[match.ref]  }</a>
          </li>
        `)}
      </ul>
    `;
  }
}

customElements.define('x-search', Search);

