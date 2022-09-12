import React from "react";
import Image from "next/image";
import styles from "./../styles/components/Vinyle.module.scss";

function vinyle({ infos }) {
  return (
    <div className="grid-x align-center">
      <div className="cell small-10 text-center">
        {infos.img ? (
          <div className={styles.vinyle}>
            <Image
              src="/assets/vinyle.png"
              alt="vinyle"
              width={180}
              height={180}
            />
            <div className={styles.cover}>
              <Image src={infos.img} alt={infos.title} layout="fill" />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default vinyle;
