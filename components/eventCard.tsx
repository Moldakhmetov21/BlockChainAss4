import Link from "next/link";
import styles from "../styles/Home.module.css";
import { truncateAddress } from "../utils/truncateAddress";
import { BigNumber } from "ethers";

type EventCardProps = {
    walletAddress: string;
    newStatus: string;
    timeStamp: BigNumber;
};

// export default function EventCard(props: EventCardProps) {
//     const date = props.timeStamp ? new Date(props.timeStamp.toNumber() * 1000) : null;

//     return (
//     <div className={styles.eventCard}>
//         <div className={styles.eventHeader}>
//         <Link href={`account/${props.walletAddress}`} style={{ color: "white" }}>
//             <p className={styles.connectedAddress}>{truncateAddress(props.walletAddress)}</p>
//         </Link>
//         <p style={{ fontSize: "0.75rem" }}>{date ? date.toLocaleString() : 'No date available'}</p>
//         </div>
//         <p style={{ fontSize: "16px" }}>{props.newStatus}</p>
//     </div>
//     );

// }; 

export default function EventCard(props: EventCardProps) {
    const date = props.timeStamp ? new Date(props.timeStamp.toNumber() * 1000) : null;

    return (
        <div className={styles.eventCard}>
            <div className={styles.eventHeader}>
                <Link href={`account/${props.walletAddress}`} style={{ color: "white" }}>
                    <p className={styles.connectedAddress}>{truncateAddress(props.walletAddress)}</p>
                </Link>
                <p style={{ fontSize: "0.75rem" }}>{date ? date.toUTCString() : 'No date available'}</p>
            </div>
            <p style={{ fontSize: "16px" }}>{props.newStatus}</p>
        </div>
    );
};