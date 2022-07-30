import React, {FC} from 'react';
import {Text} from 'react-native';
import Layout from '../../components/Layout/Layout';
import Header from '../../components/Header/Header';

const PersonalAccount: FC = () => {
  return (
    <Layout>
      <Header />
      <Text>PersonalAccount</Text>
    </Layout>
  );
};

export default PersonalAccount;
