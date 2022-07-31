import React, {FC, useState} from 'react';
import {Text} from 'react-native';
import Layout from '../../components/Layout/Layout';
import Heading from '../../ui/Heading';
import Padding from '../../ui/Padding';
import Loader from '../../ui/Loader';
import Field from '../../ui/Field';
import Button from '../../ui/Button';

const PersonalAccount: FC = () => {
  const isLoading = false;
  const [name, setName] = useState<string>('Sergey');
  return (
    <Layout>
      <Heading text="Profile" isCenter />
      <Padding>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Field
              onChange={val => setName(val)}
              val={name}
              placeholder="Enter name"
            />
            <Button onPress={() => {}} title="Update Profile" />
            <Button
              onPress={() => {}}
              title="Logout"
              colors={['bg-gray-300', '#D6D8DB']}
            />
          </>
        )}
      </Padding>
    </Layout>
  );
};

export default PersonalAccount;
