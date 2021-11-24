import React from "react";
import ReactDOM from "react-dom";

import { QueryClientProvider, QueryClient } from "react-query";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import "moment/locale/zh-cn";

import WokLayout from "./component/layout/index";

import zh_CN from "antd/lib/locale/zh_CN";

import "./styles/index.scss";

const queryClient = new QueryClient();

ReactDOM.render(
  <ConfigProvider locale={zh_CN}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter
        basename={(window as any).__MICRO_APP_BASE_URL__ || "/"}
      >
        <WokLayout />
      </BrowserRouter>
    </QueryClientProvider>
  </ConfigProvider>,
  document.getElementById("root")
);
