import style from './Header.module.sass';
import logo from './logo.svg';
import menu from './menu.svg';
import search from './search.svg';
import theme from './theme.svg';
import { useState } from 'preact/hooks';
import { JSX } from 'preact';

interface HeaderProps {
  toggleSideNav: () => void;
  toggleTheme: () => void;
}

/**
 * The header of the website.
 */
export default function Header(props: HeaderProps) {
  const handleOnMenuClick = () => {
    props.toggleSideNav();
  };

  const handleOnThemeClick = () => {
    props.toggleTheme();
  };

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header class={style.header}>
      <div class={style.headerTop}>
        <div className="wrapper">
          <a class={style.logo} href="/">
            <img src={logo} alt="סמל ידע" />
          </a>
        </div>
      </div>
      <div class={style.headerBottom}>
        <nav className="wrapper">
          <ul>
            <li>
              <button type="button" onClick={handleOnMenuClick}>
                <img src={menu} alt="סמל תפריט" />
              </button>
            </li>
            <li>
              <a href="#">פופולרי</a>
            </li>
            <li>
              <a href="#">אודות האתר</a>
            </li>
            <li>
              <input
                type="text"
                value={searchTerm}
                onChange={(e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
                  const target = e.target as HTMLInputElement;
                  setSearchTerm(target.value);
                }}
                placeholder="חיפוש..."
              />

              <button type="button">
                <img src={search} alt="סמל חיפוש" />
              </button>
              <button type="button" onClick={handleOnThemeClick}>
                <img src={theme} alt="סמל ערכת נושא" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
