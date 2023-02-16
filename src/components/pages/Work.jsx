import React, { useRef, useState } from 'react';

const Work = ({ title, about, description, image }) => {
  const width = useRef(innerWidth).current;
  const style = {
    works: {
      paddingInline: '1rem',
      paddingBlock: '1rem',
      width: '100%',
      borderBottom: '1px solid lightgrey',
    },
    container: {
      display: 'flex',
      flexDirection: width <= 500 ? 'column' : 'row',
      justifyContent: 'space-between',
      padding: '2rem',
    },

    // left side -----------------
    left: {
      flex: '50%',
      display: 'flex',
    },
    leftLogoContainer: {
      flex: '12%',
      paddingBlock: '1rem',
    },
    leftLogo: {
      width: '2rem',
      height: '2rem',
      background: 'steelblue',
      borderRadius: '50%',
    },
    leftDetail: {
      flex: '90%',
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bolder',
    },
    about: {
      color: 'grey',
    },
    // right side
    right: {
      flex: '50%',
      padding: '1rem',
    },
    description: {
      fontSize: 'x-large',
    },
    btn: {
      marginBlock: '1.5rem',
      padding: '1rem',
      fontWeight: 'bold',
      fontSize: '1rem',
      fontFamily: 'roboto',
      border: '1px solid orangered',
      borderRadius: '25px',
      background: 'transparent',
    },
    imgContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    image: {
      maxWidth: '75%',
      height: 'auto',
      objectFit: 'contain',
      borderRadius: '1rem',
    },
  };

  return (
    <div style={style.works} id="works">
      <div style={style.container}>
        <div style={style.left}>
          <div style={style.leftLogoContainer}>
            <p style={style.leftLogo}></p>
          </div>
          <div style={style.leftDetail}>
            <p style={style.title}> {title} </p>
            <p style={style.about}> {about} </p>
          </div>
        </div>
        <div style={style.right}>
          <p style={style.description}>{description}</p>
          <button style={style.btn}>
            <a href="">View Project</a>
          </button>
        </div>
      </div>
      <div style={style.imgContainer}>
        <img src={image} style={style.image} alt="project1" />
      </div>
    </div>
  );
};

export default Work;
