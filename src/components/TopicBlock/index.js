import React from 'react'
import { Tabs, Tooltip } from 'antd';
import ContentBlock from '../ContentBlock';

const { TabPane } = Tabs;

const TopicContainer = (props) => {
  const { content } = props;

  const text = <span>Hacer clic para cambiar de pestaña.</span>
  return (
    <>
      <Tooltip title={text} color={'blue'}>
        <Tabs centered size="large" style={{ padding: "2rem 0 2rem" }}>
          {content.map((tab, index) => {
            return (
              <TabPane tab={<span style={{ fontSize: "x-large" }}>{tab.title}</span>} key={index}>
                <ContentBlock
                  type={tab.type}
                  title={tab.title}
                  content={tab.text}
                  section={tab.section}
                  icon={tab.icon}
                  id={tab.id}
                  {...tab}
                  style={{ "padding": "2rem 0 4rem" }}
                />
              </TabPane>
            )
          })}
        </Tabs>
      </Tooltip>
    </>
  )
}

export default TopicContainer;