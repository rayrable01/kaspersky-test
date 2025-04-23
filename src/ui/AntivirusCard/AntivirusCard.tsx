import React, { useContext } from "react";
import { Card, Tag, Typography, Button, Space, Flex } from "antd";
import { AppContext } from "../../Context/AppContext";
import CardHeader from "../CardHeader/CardHeader";
import Link from "antd/es/typography/Link";
import KeyWords from "../KeyWords/KeyWords";
import BottomNewsCard from "../BottomNewsCard/BottomNewsCard";
import { BorderOutlined, InfoCircleOutlined } from "@ant-design/icons";
import styles from './AntivirusCard.module.css'
import Rectngl from '../../assets/dropdown-svgrepo-com.svg?react'

const { Title, Text, Paragraph } = Typography;


const AntivirusCard: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    console.error('Error in Context')
  };

  const {data} = context;

  return (
    <Card
      title={
        <CardHeader />
      }
      extra={
        <Flex style={{color: 'white'}} gap={6}>
          <Tag style={{
          backgroundColor: '#00ff00',
          color: 'black',
          border: 'none',
          margin: '0'
          }}>
            Positive
          </Tag>
            <InfoCircleOutlined />
            <BorderOutlined />
        </Flex>
      }
      style={{
        margin: "20px auto", 
        maxWidth: 900,
        background: `
          radial-gradient(circle at top left, rgba(255, 255, 255, 0.08), transparent 60%),
          linear-gradient(to bottom, #0a0f1a, #000000)
        `,
        border: '1px solid #bfbfbf',
      }}
    >
      <Space direction="vertical" size="middle" style={{ width: "100%", gap: '5px'}}>
        <Title level={4} style={{ margin: "0", textAlign: "left", color: '#0000f5' }}>
          {data.TI}
        </Title>
        <Flex gap={5}>
          <Link href={data.URL}>Punto-info.it</Link>
          <span className={styles.text}>{data.CNTR}</span>
          <span className={styles.text}>{data.CNTR_CODE}</span>
          {data.AU && data.AU.length > 0 ? (
            data.AU.map((author, index) => (
              <Text key={index} className={styles.text}>{author}</Text>
            ))
          ): <Text className={styles.text}>No authors</Text>}
        </Flex>
        <Paragraph style={{margin: 0}} className={styles.main_text} ellipsis={{ rows: 4, expandable: true }}>
          {data.AB}
        </Paragraph>
        <Button type='link' style={{display: "flex", padding: 0, fontSize: '16px', alignItems: 'center', gap: '2px'}}>
          Show more
          <Rectngl style={{width: '17px', height: '17px', fill: 'blue'}} />
        </Button>

        <KeyWords data = {data.KW}/>

        <Button className={styles.main__button}>
          Original Source
        </Button>

        <Paragraph style={{color: '#bfbfbf', textAlign: 'start', fontSize: '16px', margin: 0}}>Dublicates: <span style={{color: 'white'}}>192</span></Paragraph>

        <BottomNewsCard data = {data} />
      </Space>
    </Card>
  );
};

export default AntivirusCard;
