import Link from "next/link";
import Layout from "../components/Layout";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
  // Trans
} from "next-export-i18n";
import Image from "next/image";
import logoImg from "../public/assets/ordina_ahead.png";

const IndexPage = () => {
  const { t } = useTranslation("common");
  return (
    <Layout title={t("abstract.title")}>
      <section className="intro">
        <div>
          <h1>{t("abstract.title")}</h1>
          <p>{t("abstract.text")}</p>
          <a className="button" href={t("signUpUrl")}>
            {t("abstract.buttonLabel")}
          </a>
        </div>
        <Image
          src={logoImg}
          alt="Ordina - Ahead of Change"
          width="405"
          height="205"
        />
      </section>
      {/* <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p> */}
      <section>
        <iframe
          src={t("location.embedUrl")}
          height="450"
          style={{ border: 0, width: "calc(100vw - 15px)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <section className="motivation">
        <h2>{t("motivation.title")}</h2>
        <ul>
          <li>{t("motivation.list2.line1")}</li>
          <li>{t("motivation.list2.line2")}</li>
          <li>{t("motivation.list2.line3")}</li>
          {/* <Trans i18nKey="motivation.list">
          <li>reason</li>
          <li>reason</li>
          <li>reason</li>
        </Trans> */}
        </ul>
        <a href={t("signUpUrl")}>{t("motivation.buttonLabel")}</a>
      </section>
    </Layout>
  );
};

export default IndexPage;
