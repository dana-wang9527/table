import React from "react";
import "./App.css";
import { TableDemo } from "./Table";
import { Layout } from "antd";
import Title from "antd/lib/typography/Title";



const { Content } = Layout;

const App: React.FC = () => {
  return (
      <Layout>
        <Content>
          <Title >React + Ant Design 制作表格</Title>
          <TableDemo />
        </Content>
      </Layout>
  );
};

export default App;
