import Link from "next/link";
import styles from "./header.module.css"

const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.header__container}>
                <h1 className={styles.header__logo}>
                    <Link href="/">ViaLuz</Link>
                </h1>
                <nav className={styles.header__nav}>
                    <Link href="/"> Home </Link>
                    <Link href="/pagina/destinos"> Destinos </Link>
                    <Link href="/pagina/mais"> Mais Produtos </Link>
                    <Link href="/pagina/blog"> Blog do Vialujante </Link>
                </nav>
            </div>
        </header>
    );

}
export default Header;