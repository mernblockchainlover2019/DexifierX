"use client";

import dynamic from "next/dynamic";

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

const Widget = dynamic(
  () => import("@rango-dev/widget-embedded").then((module) => module.Widget),
  {
    ssr: false,
  }
);

function RangoWidget() {
  return (
    <Widget
      config={config}
    />
  );
}

export default RangoWidget;
