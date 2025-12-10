import React from 'react';
import styled from 'styled-components';

const HouseContainer = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  margin: 50px auto;
`;

const Roof = styled.div`
  width: 0;
  height: 0;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-bottom: 100px solid red;
  position: absolute;
  top: 0;
`;

const Body = styled.div`
  width: 200px;
  height: 100px;
  background-color: lightblue;
  position: absolute;
  bottom: 0;
`;

const Door = styled.div`
  width: 40px;
  height: 60px;
  background-color: brown;
  position: absolute;
  bottom: 0;
  left: 80px;
`;

const