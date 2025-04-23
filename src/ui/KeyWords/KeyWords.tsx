import { Button, Flex, Tag } from "antd"
import { IData_TagItem } from "../../types/types";
import { FC } from "react";
import styles from './KeyWord.module.css'

interface KeyWordsProps {
    data: IData_TagItem[]
}

const KeyWords: FC<KeyWordsProps> = ({data}) => {
    return (
        <Flex wrap style={{ width: "100%", alignItems: 'center' }} gap={10}>
            {data && data.length > 1 ? (
                data.map((item, index) => (
                    <Tag key={index} className={styles.keyword}>{item.value} <span>{item.count}</span></Tag>
                ))
            ) : (
                <div>No data avaliable</div>
            )}
            <Button type="link">Show All +9</Button>
        </Flex>
    )
}

export default KeyWords;