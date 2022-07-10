import Link from "next/link";
import Layout from "../components/Layout";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
        // width="600"
        height="450"
        style={{ border: 0, width: "calc(100vw - 20px)" }}
        // style="border:0;"
        allowFullScreen
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <h2>{t("motivation.title")}</h2>
      <ul>
        <Trans i18nKey="motivation.list">
          <li>reason</li>
          <li>reason</li>
          <li>reason</li>
        </Trans>
      </ul>
      <a href={t("signUpUrl")}>{t("motivation.buttonLabel")}</a>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default IndexPage;
