import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  HeartOutlined,
  GiftOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

const { Sider, Content, Header } = Layout;

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        collapsible
        collapsed={collapsed}
        onCollapse={(v) => setCollapsed(v)}
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["home"]}
          items={[
            {
              key: "home",
              icon: <HomeOutlined />,
              label: <Link to="/">Início</Link>,
            },
            {
              key: "story",
              icon: <HeartOutlined />,
              label: <Link to="/historia">Nossa História</Link>,
            },
            {
              key: "gifts",
              icon: <GiftOutlined />,
              label: <Link to="/presentes">Presentes</Link>,
            },
            {
              key: "photos",
              icon: <PictureOutlined />,
              label: <Link to="/fotos">Fotos</Link>,
            },
          ]}
        />
      </Sider>

      <Layout>
        <Content className="bg-gray-50 p-6">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
