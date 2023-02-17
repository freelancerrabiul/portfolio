import React, { useRef } from 'react';
import logo from '../../media/logo.webp';

import html from '../../media/skills/html.png';
import css from '../../media/skills/css.png';
import js from '../../media/skills/js.png';
import ts from '../../media/skills/ts.png';
import react from '../../media/skills/react.png';
import redux from '../../media/skills/redux.png';
import angular from '../../media/skills/angular.png';
import bootstrap from '../../media/skills/bootstrap.png';
import taiwindcss from '../../media/skills/tailwindcss.png';
import python from '../../media/skills/python.png';
import node from '../../media/skills/node.png';
import express from '../../media/skills/express.png';
import mongodb from '../../media/skills/mongodb.png';
import firebase from '../../media/skills/firebase.png';
import git from '../../media/skills/git.png';

const Home = () => {
  const width = useRef(innerWidth).current;
  const style = {
    home: {
      display: width <= 425 ? 'block' : 'flex',
      justifyContent: width <= 425 ? 'space-between' : 'space-around',
      alignItems: 'center',
      textAlign: 'center',
      hight: '100vh',
      marginTop: width <= 425 ? '1rem' : '5rem',
    },
    homeLeft: { flex: '50%' },
    img: {
      width: '60%',
      objectFit: 'cover',
    },
    homeRight: { flex: '50%' },
    name: {
      fontSize: '100px',
      color: 'orangered',
      fontFamily: 'monospace',
    },
    detail: {
      fontFamily: 'Arial',
      fontSize: 'x-large',
      textAlign: 'center',
      padding: '1rem',
    },

    dot: {
      color: 'orangered',
      fontWeight: 'bolder',
    },
    container: {
      borderBottom: '1px solid lightgrey',
      padding: '1rem',
    },

    info: {
      display: 'flex',
      padding: '1rem',
      justifyContent: 'space-around',
      alignItems: width <= 425 ? 'center' : '',
      alignContent: 'center',
    },
    heading: {
      paddingBottom: '0.5rem',
      fontSize: width <= 425 ? 'large' : 'x-large',
    },
  };

  return (
    <div id="name" className="home" style={style.container}>
      <div style={style.home}>
        <div style={style.homeLeft}>
          <img style={style.img} src={logo} />
        </div>
        <div style={style.homeRight}>
          <p style={style.name}>Hello!</p>
          <p style={style.detail}>
            I'm Rabiul,
            <b>a FullStack Software Engineer </b>
            from Bangladesh
            <span style={style.dot}>.</span>
          </p>
        </div>
      </div>
      <div style={style.info}>
        <div style={{ fontFamily: 'arial' }}>
          <p style={style.heading}>Skiils (Front End):</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={html} alt="html" />
            <p style={{ paddingLeft: '0.5rem', fontSize: 'large' }}> Html </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={css} alt="css" />
            <p style={{ paddingLeft: '0.5rem', fontSize: 'large' }}> CSS </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '1rem',
            }}
          >
            <img src={taiwindcss} alt="Tailwindcss" />
            <p style={{ paddingLeft: '0.5rem', fontSize: 'large' }}>
              {' '}
              Tailwind{' '}
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '1rem',
            }}
          >
            <img src={bootstrap} alt="Bootstrap" />
            <p style={{ paddingLeft: '0.5rem', fontSize: 'large' }}>
              {' '}
              Bootstrap{' '}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={js} alt="js" />
            <p style={{ paddingLeft: '0.5rem', fontSize: 'large' }}>
              {' '}
              Javascript{' '}
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '1rem',
            }}
          >
            <img src={react} alt="react" />
            <p style={{ paddingLeft: '0.5rem', fontSize: 'large' }}> React </p>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '1rem',
            }}
          >
            <img src={redux} alt="redux" />
            <p style={{ paddingLeft: '0.5rem', fontSize: 'large' }}> Redux </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '1rem',
            }}
          >
            <img src={ts} alt="ts" />
            <p style={{ paddingLeft: '0.5rem', fontSize: 'large' }}>
              {' '}
              Typescript{' '}
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '1rem',
            }}
          >
            <img src={angular} alt="angular" />
            <p style={{ paddingLeft: '0.5rem', fontSize: 'large' }}>
              {' '}
              Angular{' '}
            </p>
          </div>
        </div>

        <div style={{ fontFamily: 'arial' }}>
          <p style={style.heading}>Skiils (Back End):</p>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={python} alt="Python" />
            <p style={{ paddingLeft: '0.5rem', fontSize: 'large' }}> Python </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={node} alt="Node" />
            <p style={{ paddingLeft: '0.5rem', fontSize: 'large' }}>
              {' '}
              Node js{' '}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={express} alt="Express" />
            <p style={{ paddingLeft: '0.5rem', fontSize: 'large' }}>
              {' '}
              Express{' '}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={mongodb} alt="Mongodb" />
            <p style={{ paddingLeft: '0.5rem', fontSize: 'large' }}>
              {' '}
              Mongodb{' '}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={firebase} alt="Firebase" />
            <p style={{ paddingLeft: '0.5rem', fontSize: 'large' }}>
              {' '}
              Firebase{' '}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={git} alt="Git" />
            <p style={{ paddingLeft: '0.5rem', fontSize: 'large' }}>
              {' '}
              Git version control system (github){' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
