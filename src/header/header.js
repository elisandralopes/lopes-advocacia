import Button from '../components/button/button';
import Logo from '../components/logo/logo';
import ItemMenu from '../components/item-menu/item-menu';
import header from './header.json';

export default class Header {
  render() {
    return /*html*/ `
        <header>
          <div class="header-content center--container">
          ${Logo(header.nameLogo, header.urlImage, header.urlHome)}    
            <div class="menu">
              ${header.itensMenu
                .map(item => ItemMenu(item.item, item.url))
                .join('')}
              ${Button('Agendar Consulta', '#', 'button--gold')}
            </div>
          </div>
        </header>`;
  }
}
