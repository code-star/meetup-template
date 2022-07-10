import Link from "next/link";
import Layout from "../components/Layout";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
  // Trans
} from "next-export-i18n";
const IndexPage = () => {
  const { t } = useTranslation("common");

  return (
    <Layout title={t("abstract.title")}>
      <h1>{t("abstract.title")}</h1>
      <p>{t("abstract.text")}</p>
      <a href={t("signUpUrl")}>{t("abstract.buttonLabel")}</a>
      {/* <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p> */}
      <iframe
        src={t("location.embedUrl")}
        height="450"
        style={{ border: 0, width: "calc(100vw - 20px)" }}
        allowFullScreen
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
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
    </Layout>
  );
};

export default IndexPage;
