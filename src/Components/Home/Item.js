import React from 'react';
import {Card, Icon, Avatar} from 'antd';

const {Meta} = Card;

const Item = ({market, image, name, price, upc}) => (

    <Card
        hoverable
        //style={{ width: 200 }}
        extra={`${market} ${upc}`}
        cover={<img alt={name} src={image} />}
        actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
    >
        <Meta
        //avatar={<Avatar src='"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"' />}
        title={price}
        description={name}
        />
    </Card>
);

export default Item;