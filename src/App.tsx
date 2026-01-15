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
      icon: <HomeOutlined style={{ color: "white" }} />,
      label: <Link style={{ color: "white" }} to="/">Início</Link>,
    },
    {
      key: "story",
      icon: <HeartOutlined style={{ color: "white" }} />,
      label: <Link style={{ color: "white" }} to="/historia">Nossa História</Link>,
    },
    {
      key: "info",
      icon: <InfoCircleOutlined style={{ color: "white" }} />,
      label: <Link style={{ color: "white" }} to="/informacoes">Informações</Link>,
    },
    {
      key: "gifts",
      icon: <GiftOutlined style={{ color: "white" }} />,
      label: <Link style={{ color: "white" }} to="/presentes">Presentes</Link>,
    },
    {
      key: "photos",
      icon: <PictureOutlined style={{ color: "white" }} />,
      label: <Link style={{ color: "white" }} to="/fotos">Fotos</Link>,
    },
    {
      key: "rsvp",
      icon: <TeamOutlined style={{ color: "white" }} />,
      label: <Link style={{ color: "white" }} to="/rsvp">Confirmar Presença</Link>,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh", background: "transparent" }}>
      {/* Desktop Sidebar */}
      {!isMobile && (
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(v) => setCollapsed(v)}
          style={{
            background: "var(--theme-purple-dark)",
            zIndex: 100,
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["home"]}
            style={{ background: "var(--theme-purple-dark)" }}
            items={menuItems}
          />
        </Sider>
      )}

      {/* Mobile Drawer */}
      {isMobile && (
        <Drawer
          title={<span style={{ fontFamily: "'Great Vibes', cursive", fontSize: "24px", color: "var(--text-primary)" }}>Menu</span>}
          placement="left"
          onClose={() => setMobileMenuOpen(false)}
          open={mobileMenuOpen}
          width="100%"
          styles={{ body: { padding: 0, background: "var(--theme-purple-dark)" }, header: { background: "var(--primary-bg)" } }}
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["home"]}
            style={{ background: "var(--theme-purple-dark)", height: "100%" }}
            items={menuItems}
          />
        </Drawer>
      )}

      <Layout style={{ background: "transparent" }}>
        {/* Header with Hamburger Button (only on mobile or when sidebar is collapsed/hidden) */}
        {isMobile && (
          <Header style={{ padding: 0, background: "var(--primary-bg)", display: 'flex', alignItems: 'center' }}>
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setMobileMenuOpen(true)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
                color: "var(--text-primary)"
              }}
            />
          </Header>
        )}

        <Content style={{ background: "transparent", padding: "5px" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
