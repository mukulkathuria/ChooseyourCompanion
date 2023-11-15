import React, {useEffect} from "react";
import Link from "next/link";
import Search from "@components/search";
import "../../css/companion_dashboard.css";
import Image from "next/image";
import ProfileIMG from "../../css/profile.jpg";
import Head from 'next/head';

const companion_dashboard = () => {
  useEffect(() => {
    const modal = document.getElementById('userModal');
    const btns = document.querySelectorAll('.profile-pic, .name');
    const span = document.getElementsByClassName('close')[0];
    const profile = document.querySelector('.profile-card');

    btns.forEach(btn => {
      btn.onclick = function() {
        modal.style.display = 'block';
        profile.style.zIndex = '-1';
      }
    });

    span.onclick = function() {
      modal.style.display = 'none';
    }

    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    }
  }, []);


  return (
    <div>
      <Head>
        <title>Enhanced User Interface</title>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet" />
      </Head>
                <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={styles.userRequests}>
            <h2>User Requests</h2>
            {/* Map through user request data here */}
            <div className={styles.request}>
              <Image className={styles.profilePic} src="/img-1.jpg" alt="Profile Picture" width={50} height={50} />
              <div className={styles.userDetails}>
                <h3 className={styles.name}>Jane Doe</h3>
                <p className={styles.age}>25</p>
              </div>
              <div className={styles.actions}>
                <button className={styles.accept} onClick={() => handleModal('open')}>Accept</button>
                <button className={styles.reject}>Reject</button>
              </div>
            </div>
            {/* Repeat the above block for each user request */}
          </div>
        </div>
        <div className={styles.mainContent}>
          <div className={`${styles.profile} ${styles.profileCard}`}>
            <Image className={styles.profilePic} src="/img-1.jpg" alt="User Picture" width={100} height={100} />
            <h3>John Smith</h3>
            <p>Address information here</p>
            {/* Additional information */}
          </div>
        </div>
      </div>

      {/* Modal component */}
      <div id="userModal" className={styles.modal}>
        <div className={styles.modalContent}>
          <span className={styles.close} onClick={() => handleModal('close')}>&times;</span>
          <Image className={styles.modalProfilePic} src="/img-1.jpg" alt="Profile Picture" width={150} height={150} />
          <h3 className={styles.modalName}>Jane Doe</h3>
          <p className={styles.modalInfo}>More information here...</p>
        </div>
      </div>
    </div>
  );
};

export default companion_dashboard;