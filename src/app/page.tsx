
import Header from "@/components/header";
import Footer from "@/components/footer";
import Section from "@/components/section";
import { Widget } from "@rango-dev/widget-embedded";
import styles from '@/styles/home.module.css';

const config = {
  // This API key is only for test purpose. Don't use it in production.
  apiKey: "19193389-443b-4d59-9dd9-500bde0931c7",
  // This project id is only for test purpose. Don't use it in production.
  // Get your Wallet Connect project id from https://cloud.walletconnect.com/
  walletConnectProjectId: "489c5034628c45947388bc9a0ef2ea03",
  amount: 1,
  from: {
    blockchain: "BSC",
    token: {
      blockchain: "BSC",
      address: null,
      symbol: "BNB",
    },
  },
  to: {
    blockchain: "AVAX_CCHAIN",
    token: {
      blockchain: "AVAX_CCHAIN",
      address: null,
      symbol: "AVAX",
    },
  },
};

export default function Home() {
  return <main>
    <Section>
      <Header />
      <div className={styles.sectionHome}>
        <div id="home1" className="pt-[80px]">
          <div className={styles.textVideoTitle}>First Time on Dexifier?</div>
          <div className={"my-2 " + styles.textVideoSubtitle}>Watch this video</div>
          <div className="flex">
            <iframe className="mx-auto max-w-full" src="https://www.youtube.com/embed/pq7g0O76g2E" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
        <div id="home2" className="col-span-2 relative">
          <div className="w-[360px] h-[540px] z-[1] relative">
            <Widget config={config} />
          </div>
          <div className="absolute w-[180px] right-[40px] top-[-200px]">
            <img src="1.gif" className="rotate-[120deg]" alt="gif1" />
          </div>
          <div className="absolute w-[380px] right-[-180px] top-[140px]">
            <img src="2.gif" className="" alt="gif2" />
          </div>
        </div>
      </div>
    </Section>
    {/* Exchange Section */}
    <Section>
      <div className={styles.sectionExchange}>
        <div className={styles.textSectionTitle28}>
          <span className={styles.textHighlight}>Easy</span> & Infinite Exchange routes
        </div>
        <div></div>
        <div className={styles.imageExchange}>
          <div className={styles.imageExchange1}>
            <img src="3.gif" className="rotate-[-95deg]" alt="gif3" />
          </div>
          <div className={styles.imageExchange2}>
            <img src="5.gif" className="rotate-[75deg]" alt="gif5" />
          </div>
        </div>
        <div className={styles.textExchange}>
          We automatically find the fastest & cheapest trade routes for you. <br /><br />
          With 50+ Blockchains supported, and 1000s of coins, there are no limits to what you can trade.
        </div>
      </div>
    </Section>
    {/* Privacy Section */}
    <Section>
      <div className={styles.sectionPrivacy}>
        <div className={styles.textSectionTitle48}>
          <span className={styles.textHighlight}>Privacy</span> comes first
        </div>
        <div className={styles.textSectionContent}>
          At Dexifier, we believe in the unalienable right to privacy and freedom in the financial world. In a landscape cluttered with mandatory sign-ups and invasive KYC checks, we stand apart. Dexifier is your gateway to a decentralized exchange experience that fiercely protects your anonimity and financial privacy.
        </div>
        <div className={"font-bold " + styles.textSectionContent}>
          No Logins, No Cookies, No KYC -- EVER.
        </div>
        <div className={styles.sectionPrivacyCards}>
          <div className={styles.cardPrivacy}>NO logins/ signups</div>
          <div className={styles.cardPrivacy}>No cookies</div>
          <div className={styles.cardPrivacy}>NO kyc</div>
        </div>
      </div>
    </Section>
    {/* Pair Section */}
    <Section>
      <div className={styles.sectionPair}>
        <div className={"text-center " + styles.textSectionTitle40}>
          <span className={styles.textHighlight}>Frequently</span> traded pairs
        </div>
        <div className={"mt-[40px] gap-[20px] relative z-[1] " + styles.sectionPairContent}>
          <div className={"grid gap-[30px] underline " + styles.textSectionContent}>
            <a href="#">ETH to BTC</a>
            <a href="#">LTC to ETH</a>
            <a href="#">USDT to BTC</a>
            <a href="#">BTC to XRP</a>
            <a href="#">BTC to USDT</a>
            <a href="#">ETH to BTC LTC to ETH</a>
          </div>
          <div className={"grid gap-[30px] underline " + styles.textSectionContent}>
            <a href="#">ETH to BTC</a>
            <a href="#">LTC to ETH</a>
            <a href="#">USDT to BTC</a>
            <a href="#">BTC to XRP</a>
            <a href="#">BTC to USDT</a>
            <a href="#">ETH to BTC LTC to ETH</a>
          </div>
        </div>
      </div>
      <div className={styles.imagePair1}>
        <img src="1.gif" className="rotate-[-95deg]" alt="gif1" />
      </div>
      <div className={styles.imagePair2}>
        <img src="4.gif" className="rotate-[35deg]" alt="gif4" />
      </div>
    </Section>
    {/* Customer Section */}
    <Section>
      <div className={styles.sectionCustomer}>
        <div className={"p-[40px] border " + styles.sectionCustomerL}>
          <div className={styles.textSectionTitle40}>
            <span className={styles.textHighlight}>24/7</span> Customer Support
          </div>
          <div className={"mt-[40px] " + styles.textSectionContent}>
            Having trouble with a swap? Head to our Discord, open a ticket or ask a question. Our international team & community are ready to help, around the clock.
          </div>
          <div className={"mt-[80px] " + styles.buttonJoin}>
            Join Discord
          </div>
        </div>
        <div className={"flex items-center " + styles.sectionCustomerR}>
          <img src="customer.png" alt="customer" />
        </div>
        <div className={styles.imageCustomer}>
          <img src="5.gif" className="rotate-[-150deg]" alt="gif5" />
        </div>
      </div>
    </Section>
    {/* Wallets Section */}
    <Section>
      <div className={styles.sectionWallets}>
        <div className={`${styles.sectionWalletL} ${styles.textSectionTitle40}`}>
          <span className={styles.textHighlight}>Wallets</span> & Projects supported
          <div className={styles.imageWallet}>
            <div className={styles.imageWallet1}>
              <img src="2.gif" className="rotate-[0deg]" alt="gif2" />
            </div>
            <div className={styles.imageWallet2}>
              <img src="5.gif" className="rotate-[-150deg]" alt="gif5" />
            </div>
          </div>
        </div>
        <div className={"wallets " + styles.sectionWalletR} style={{ gridAutoRows: '150px' }}>
          <div className="bg-white"><img src="wallets/xdefi.jpg" alt="xdefi" /></div>
          <div className="bg-white"><img src="wallets/metamask.jpg" alt="metamask" /></div>
          <div className="bg-white"><img src="wallets/phantom.jpg" alt="phantom" /></div>
          <div className="bg-white"><img src="wallets/keplr.jpg" alt="keplr" /></div>
          <div className="bg-white"><img src="wallets/tronlink.png" alt="tronlink" /></div>
          <div className="bg-white"><img src="wallets/apptopia.png" alt="apptopia" /></div>
          <div><img src="wallets/rango.png" alt="rango" /></div>
          <div><img src="wallets/thor.png" alt="thor" /></div>
          <div><img src="wallets/maya.png" alt="maya" /></div>
          <div><img src="wallets/1inch.svg" alt="1inch" /></div>
          <div><img src="wallets/across.png" alt="across" /></div>
          <div className={styles.textIconText}>Many More...</div>
        </div>
      </div>
    </Section>
    {/* Community Section */}
    <Section>
      <div className={styles.sectionCommunity}>
        <div className="relative z-[1]">
          <div className={"mt-[80px] " + styles.textCommunity}>
            <span className={styles.textHighlight}>Join</span> Our Community!
          </div>
          <div className={`mt-[60px] ${styles.sectionCommunityContent} ${styles.textSectionContent}`}>
            Discover the latest insights on Discord, engage with fellow crypto enthusiasts on Telegram, follow our pulse on Twitter, catch our informative and entertaining videos on YouTube.
          </div>
          <div className="mt-[240px] mb-[80px] p-[20px] border flex">
            <div className={"flex items-center " + styles.textSocials}>socials</div>
            <div className={"ml-auto flex gap-[20px] " + styles.iconSocials}>
              <img src="socials/discord.svg" alt="discord" />
              <img src="socials/telegram.svg" alt="telegram" />
              <img src="socials/twitter.svg" alt="twitter" />
              <img src="socials/youtube.svg" alt="youtube" />
            </div>
          </div>
        </div>
        <div className={styles.imageCommunity}>
          <div className={styles.imageCommunity1}>
            <img src="3.gif" className="rotate-[-160deg]" alt="gif3" />
          </div>
          <div className={styles.imageCommunity2}>
            <img src="5.gif" className="rotate-[6deg]" alt="gif5" />
          </div>
        </div>
      </div>
    </Section>
    <Footer />
  </main>
}
