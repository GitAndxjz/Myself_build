import React, { useState } from "react"
import { Tabs } from 'antd';
import Selects from "./select"
import "./index.css"
import {
    Layout,
    Menu,
    // Breadcrumb
} from 'antd';
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined
} from '@ant-design/icons';
import { routeConfig } from "../../config/route"
import {
    Switch,
    Route,
} from "react-router-dom"


const { SubMenu } = Menu;
const {
    // Header,
    Content,
    Sider
} = Layout;


const { TabPane } = Tabs;

const Index: React.FC = () => {

    const [TabPaneKey, setTabPaneKey] = useState<string>('1')



    console.log(routeConfig)
    return <div className="LayOut">
        <Layout>
            {/* <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header> */}
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                            <Menu.Item key="1">option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '24px 24px 24px' }}>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                        key="2"
                    >
                        <Tabs defaultActiveKey="1" onChange={key => setTabPaneKey(key)}>
                            <TabPane tab="Tab 1" key="1">
                                <Selects selectKey={TabPaneKey} />
                            </TabPane>
                            <TabPane tab="Tab 2" key="2">
                                <Selects selectKey={TabPaneKey} />
                            </TabPane>
                            <TabPane tab="Tab 3" key="3">
                                <Selects selectKey={TabPaneKey} />
                            </TabPane>
                        </Tabs>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
}

export default Index










// import React, { useState } from "react"
// import { Tabs } from 'antd';
// import Selects from "./select"
// import "./index.css"
// import {
//     Layout,
//     Menu,
//     // Breadcrumb
// } from 'antd';
// import {
//     UserOutlined,
//     LaptopOutlined,
//     NotificationOutlined
// } from '@ant-design/icons';
// import { routeConfig } from "../../config/route"
// import {
//     Switch,
//     Route,
//     Redirect,
// } from "react-router-dom"


// const { SubMenu } = Menu;
// const {
//     // Header,
//     Content,
//     Sider
// } = Layout;


// const { TabPane } = Tabs;

// const Index: React.FC = () => {

//     const [TabPaneKey, setTabPaneKey] = useState<string>('1')



//     console.log(routeConfig)
//     return <div className="LayOut">
//         <Layout>
//             {/* <Header className="header">
//                 <div className="logo" />
//                 <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
//                     <Menu.Item key="1">nav 1</Menu.Item>
//                     <Menu.Item key="2">nav 2</Menu.Item>
//                     <Menu.Item key="3">nav 3</Menu.Item>
//                 </Menu>
//             </Header> */}
//             <Layout>
//                 <Sider width={200} className="site-layout-background">
//                     <Menu
//                         mode="inline"
//                         defaultSelectedKeys={['1']}
//                         defaultOpenKeys={['sub1']}
//                         style={{ height: '100%', borderRight: 0 }}
//                     >

//                         {
//                             <Switch>
//                                 {routeConfig
//                                     .filter(route => route.Component && !route.redirect)
//                                     .map(({ path, Component, hideBreadcrumb }) => {
//                                         return (
//                                             <Menu.Item key="1">
//                                                 <Route key={path} path={path} exact={true}>
//                                                     {/* {hideBreadcrumb !== true && <WokBreadcrumb />} */}
//                                                     {Component && <Component />}
//                                                 </Route>
//                                             </Menu.Item>

//                                         );
//                                     })}
//                                 {/* {routeConfig
//                                     .filter(route => route.redirect)
//                                     .map(({ path, redirect }) => {
//                                         return (
//                                             redirect && <Redirect key={path} from={path} to={redirect} />
//                                         );
//                                     })} */}
//                             </Switch>
//                         }
//                         {/* 
//                         <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
//                             <Menu.Item key="1">option1</Menu.Item>
//                             <Menu.Item key="2">option2</Menu.Item>
//                             <Menu.Item key="3">option3</Menu.Item>
//                             <Menu.Item key="4">option4</Menu.Item>
//                         </SubMenu>
//                         <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
//                             <Menu.Item key="5">option5</Menu.Item>
//                             <Menu.Item key="6">option6</Menu.Item>
//                             <Menu.Item key="7">option7</Menu.Item>
//                             <Menu.Item key="8">option8</Menu.Item>
//                         </SubMenu>
//                         <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
//                             <Menu.Item key="9">option9</Menu.Item>
//                             <Menu.Item key="10">option10</Menu.Item>
//                             <Menu.Item key="11">option11</Menu.Item>
//                             <Menu.Item key="12">option12</Menu.Item>
//                         </SubMenu> 
//                         */}
//                     </Menu>
//                 </Sider>
//                 <Layout style={{ padding: '24px 24px 24px' }}>
//                     <Content
//                         className="site-layout-background"
//                         style={{
//                             padding: 24,
//                             margin: 0,
//                             minHeight: 280,
//                         }}
//                         key="2"
//                     >
//                         <Tabs defaultActiveKey="1" onChange={key => setTabPaneKey(key)}>
//                             <TabPane tab="Tab 1" key="1">
//                                 <Selects selectKey={TabPaneKey} />
//                             </TabPane>
//                             <TabPane tab="Tab 2" key="2">
//                                 <Selects selectKey={TabPaneKey} />
//                             </TabPane>
//                             <TabPane tab="Tab 3" key="3">
//                                 <Selects selectKey={TabPaneKey} />
//                             </TabPane>
//                         </Tabs>
//                     </Content>
//                 </Layout>
//             </Layout>
//         </Layout>
//     </div>
// }

// export default Index