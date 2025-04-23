import { Button, Card, Flex, Typography } from "antd"
import { formateDate } from "../../func/formateDate";
import { IData_SnippetNews } from "../../types/types";
import { FC } from "react";
import Link from "antd/es/typography/Link";
import styles from './BottomNews.module.css'
import { BorderOutlined, InfoCircleOutlined } from "@ant-design/icons";
import Rectngl from '../../assets/dropdown-svgrepo-com.svg?react'

const { Title, Text } = Typography;

interface BottomNewsCardProps {
    data: IData_SnippetNews;
}

const BottomNewsCard: FC<BottomNewsCardProps> = ({data}) => {
    return (
        <>
        <Card
            size="small"
            type="inner"
            style={{
                textAlign: 'start',
                backgroundColor: "transparent",
                width: "100%",
                borderColor: '#0000f5',
            }}
        >   
            <Flex justify="space-between" style={{color: 'white'}}>
                <Text className={styles.top_text}>{formateDate(data.DP)} <span className={styles.reach}>{data.REACH}K Reach</span></Text>
                <Flex gap={5}>
                    <InfoCircleOutlined />
                    <BorderOutlined />
                </Flex>
            </Flex>
            <Title level={5} style={{ margin: "4px 0", color: '#0000f5' }}>
                {data.TI}
            </Title>
            <Flex style={{justifyContent: 'flex-start'}} gap={5}>
                <Link href={data.DOM}>{data.DOM}</Link>
                <span className={styles.country}>{data.CNTR}</span>
                {data.AU && data.AU.length > 0 ? (
                data.AU.map((author, index) => (
                    <Text key={index} className={styles.authors}>{author}</Text>
                ))
                ): <Text className={styles.authors}>No authors</Text>}
            </Flex>
        </Card>

        <Button className={styles.main__button} block style={{ marginTop: "10px" }}>
            <Rectngl style={{width: '17px', height: '17px', fill: 'white'}} />
            View Duplicates
        </Button>
        </>
    )
}

export default BottomNewsCard;