import React from 'react'
import { Tabs } from 'antd';
import ContentBlock from '../ContentBlock';

const { TabPane } = Tabs;

const TopicContainer = (props) => {
  const { content } = props;
  return (
    <>
      <Tabs centered size="large" style={{ padding: "4rem 0 8rem" }}>
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
                style={{ "padding": "2rem 0 8rem" }}
              />
            </TabPane>
          )
        })}
      </Tabs>
    </>
  )
}

export default TopicContainer;