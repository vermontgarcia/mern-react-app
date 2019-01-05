import React from 'react';
import {Card, Icon} from 'antd';
import {Tooltip} from 'antd';

const {Meta} = Card;

const Item = ({item, handleAddList}) => (

  <Card
    hoverable
    //style={{ width: 200 }}
    extra={`${item.market} ${item.upc}`}
    cover={<img alt={item.name} src={item.image} />}
    actions={[
      <Tooltip placement="top" title='Añadir a mi lista'>
        <Icon onClick={handleAddList.bind(this, item)} type="file-done" />
      </Tooltip>,
      <Tooltip placement="top" title='Ver en el sitio del anunciante'>
        <a href={item.link} title={item.link} target="_blank">
          <Icon type="shop" />
        </a>
      </Tooltip>
    ]}
  >
    <Meta
    title={item.price}
    description={item.name}
    />
  </Card>
);

export default Item;