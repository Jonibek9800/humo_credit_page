import { ICreditType } from "../model";
import styles from "./credit_type_card.module.css";
import { CreditAction } from "@/features/credit_action";
import { CreditInfo } from "@/entities/credit_info";
import { BASE_URL } from "@/shared/init_axios";

export default function CreditTypeCard({ credit }: { credit: ICreditType }) {
  const imgUrl =
    credit.attributes.img.data[0].attributes?.formats?.thumbnail?.url;
  return (
    <div className={styles.credit_type_card}>
      <div className={styles.credit_info_action}>
        <CreditInfo
          title={credit.attributes.title}
          description={credit.attributes.description}
          conditions={credit.attributes.conditions}
        />
        <div className={styles.credit_action}>
          <CreditAction />
        </div>
      </div>
      <div className={styles.credit_baner}>
        <img
          className={styles.cledit_baner_img}
          src={BASE_URL + imgUrl}
          alt={credit.attributes.title}
        />
      </div>
    </div>
  );
}
