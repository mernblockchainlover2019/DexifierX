
import styles from '@/styles/home.module.css';

export default function Header() {
    return <div className={"my-[48px] relative z-[1] " + styles.header}>
        <div className="flex">
            <img src="icon.svg" className={styles.iconLogo} />
            <div className={"ml-2 mr-auto " + styles.textLogo}>Dexifier</div>
            <div className="show-on-desktop">
                <div className="flex gap-8 mt-4">
                    <a href="#" className={styles.textNavBar}>support</a>
                    <a href="#" className={styles.textNavBar}>guides</a>
                    <a href="#" className={styles.textNavBar}>docs</a>
                    <a href="#" className={styles.textNavBar}>about us</a>
                </div>
            </div>
        </div>
        <span className={"ml-14 -mt-2 block " + styles.textLogoSubtitle}>home of alpha</span>
        <div className="show-on-mobile">
            <div className="flex mt-4">
                <div className="flex gap-4 mx-auto">
                <a href="#" className={styles.textNavBar}>support</a>
                <a href="#" className={styles.textNavBar}>guides</a>
                <a href="#" className={styles.textNavBar}>docs</a>
                <a href="#" className={styles.textNavBar}>about us</a>
                </div>
            </div>
        </div>
    </div>
}