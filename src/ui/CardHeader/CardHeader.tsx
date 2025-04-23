import { Space, Typography } from "antd";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import styles from './CardHeader.module.css'
import { formateDate } from "../../func/formateDate";
import { formatPercent } from "../../func/toPercent";
const { Text } = Typography;

const CardHeader: React.FC = () => {
    const context = useContext(AppContext);
    
    if (!context) {
        console.error('Error in Context')
    };
    
    const {data} = context;

    return (
        <Space align="start" style={{ width: "100%" }}>
            <Text className={styles.text}>{formateDate(data.DP)} <span className={styles.reach}>{data.REACH}K</span> Reach</Text>
            <Text className={styles.text}>
                Top Traffic: {data.TRAFFIC.length > 0 && (
                data.TRAFFIC.map((trafficObject, index) => (
                    <Text className={styles.text} key={index}>
                        <span className={styles.country}>{trafficObject.value}</span> <span className={styles.percents}>{formatPercent(trafficObject.count)}</span>
                    </Text>
                    ))
                )}
            </Text>
            </Space>
    );
};

export default CardHeader;
