export default function Button(text, url) {
    return /*html*/`
    <a href="${url}" class="main-buttons__button button-pattern--gold">
        ${text}
    </a>`;
}