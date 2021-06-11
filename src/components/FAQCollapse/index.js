import { Collapse } from 'antd';
const { Panel } = Collapse;

const FAQCollapse = ({data}) => {
    return (
        <Collapse bordered={false} defaultActiveKey={['0']}>
            {data.faq.map((item, id) => {
                return (
                    <Panel header={item.question} key={id}>
                        {item.answer}
                    </Panel>
                )
            })}
        </Collapse>
    )
}

export default FAQCollapse;