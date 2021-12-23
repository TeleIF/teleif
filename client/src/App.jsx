import './App.scss'
import { useState, useEffect } from 'react'
import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import ChatArea from './components/ChatArea'
import Sider from 'antd/lib/layout/Sider'
import 'react-chat-elements/dist/main.css';
import { ChatList } from 'react-chat-elements'

const App = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  const [sidebarWidth, setSidebarWidth] = useState(400)
  const [isCollapsed, setCollapsed] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize, { once: true });
  })

  useEffect(() => {
    setCollapsed(window.innerWidth <= 992)
  }, [])

  useEffect(() => {
    setSidebarWidth(isCollapsed ? window.innerWidth : 400)
  }, [isCollapsed])

  return (
    <Layout hasSider style={{ height: dimensions.height, width: dimensions.width }}>
      <Sider collapsed={isCollapsed} onCollapse={(collapsed, type) => {setCollapsed(collapsed)}} onBreakpoint={(broken) => setCollapsed(broken)} collapsedWidth={0} breakpoint='lg' width={sidebarWidth} style={{ background: 'darkgrey' }}>
        <ChatList
          dataSource={[
            {
              avatar: 'https://c.tenor.com/cWsK6nwdcHYAAAAM/bing-chi-ling-alex-mei-bing.gif',
              alt: 'John Xina',
              title: 'John Xina',
              subtitle: 'Bing Chilling🥶🍦',
              date: new Date(),
              unread: 1,
            },
            {
              avatar: 'https://c.tenor.com/AceFzoOKEGIAAAAC/spongebob-spongebob-cry.gif',
              alt: 'Reactjs',
              title: 'J',
              subtitle: '😢😢😢',
              date: new Date(),
              unread: 23,
            }
          ]}
          onclick={() => setCollapsed(false)}
        >
        </ChatList>
      </Sider>
      <Content style={{ width: (dimensions.width - sidebarWidth), background: 'grey' }}>
        <ChatArea />
      </Content>
    </Layout>
  );
}

export default App;
