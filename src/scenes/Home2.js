import React from 'react';
import { Button } from 'antd';

import './home.less';

import Hello from 'components/Hello';

const Home = () => {
  return (
    <React.Fragment>
      <Hello />
      <Button type="primary">Button</Button>
      <div className="row">文字</div>
    </React.Fragment>
  );
};
export default Home;
