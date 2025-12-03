import { Layout, Menu, Button, Drawer, Grid } from "antd";
import {
  HomeOutlined,
  HeartOutlined,
  GiftOutlined,
  PictureOutlined,
  TeamOutlined,
  MenuOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const { Sider, Content, Header } = Layout;
const { useBreakpoint } = Grid;

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const screens = useBreakpoint();
  const location = useLocation();

  // Determine if we are on a mobile screen (md or smaller)
  // Note: screens.lg might be undefined initially, so handle that
  const isMobile = !screens.lg;

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const menuItems = [
    {
      key: "home",
      icon: <HomeOutlined style={{ color: "#f2e8cf" }} />,
      label: <Link style={{ color: "#f2e8cf" }} to="/">Início</Link>,
    },
    {
      key: "story",
      icon: <HeartOutlined style={{ color: "#f2e8cf" }} />,
      label: <Link style={{ color: "#f2e8cf" }} to="/historia">Nossa História</Link>,
    },
    {
      key: "info",
      icon: <InfoCircleOutlined style={{ color: "#f2e8cf" }} />,
      label: <Link style={{ color: "#f2e8cf" }} to="/informacoes">Informações</Link>,
    },
    {
      key: "gifts",
      icon: <GiftOutlined style={{ color: "#f2e8cf" }} />,
      label: <Link style={{ color: "#f2e8cf" }} to="/presentes">Presentes</Link>,
    },
    {
      key: "photos",
      icon: <PictureOutlined style={{ color: "#f2e8cf" }} />,
      label: <Link style={{ color: "#f2e8cf" }} to="/fotos">Fotos</Link>,
    },
    {
      key: "rsvp",
      icon: <TeamOutlined style={{ color: "#f2e8cf" }} />,
      label: <Link style={{ color: "#f2e8cf" }} to="/rsvp">Confirmar Presença</Link>,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Desktop Sidebar */}
      {!isMobile && (
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(v) => setCollapsed(v)}
          style={{
            background: "#5f5b45",
            zIndex: 100,
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["home"]}
            style={{ background: "#5f5b45" }}
            items={menuItems}
          />
        </Sider>
      )}

      {/* Mobile Drawer */}
      {isMobile && (
        <Drawer
          title={<span style={{ fontFamily: "'Great Vibes', cursive", fontSize: "24px", color: "#556B2F" }}>Menu</span>}
          placement="left"
          onClose={() => setMobileMenuOpen(false)}
          open={mobileMenuOpen}
          width="100%"
          styles={{ body: { padding: 0, background: "#5f5b45" }, header: { background: "#f7f4ef" } }}
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["home"]}
            style={{ background: "#5f5b45", height: "100%" }}
            items={menuItems}
          />
        </Drawer>
      )}

      <Layout>
        {/* Header with Hamburger Button (only on mobile or when sidebar is collapsed/hidden) */}
        {isMobile && (
          <Header style={{ padding: 0, background: "#f7f4ef", display: 'flex', alignItems: 'center' }}>
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setMobileMenuOpen(true)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
                color: "#5f5b45"
              }}
            />
          </Header>
        )}

        <Content style={{ background: "#f7f4ef", padding: "5px" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
