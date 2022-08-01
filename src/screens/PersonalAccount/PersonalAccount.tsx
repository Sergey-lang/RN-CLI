import React, {FC, useState} from 'react';
import Layout from '../../components/Layout/Layout';
import Heading from '../../ui/Heading';
import Padding from '../../ui/Padding';
import Loader from '../../ui/Loader';
import Field from '../../ui/Field';
import Button from '../../ui/Button';
import {asyncAlert} from '../../ui/AsyncAlert';

const PersonalAccount: FC = () => {
  const isLoading = false;
  const [name, setName] = useState<string>('Sergey');

  const showAlert = async () => {
    try {
      const value = await asyncAlert({
        title: 'First',
        msg: 'Select something',
        buttons: {
          text: 'Hello',
          resolveValue: 'Hi!',
          textSecond: 'Goodbye',
          resolveValueSecond: 'By(',
        },
      });
      console.log('value: ', value);
    } catch (error) {}
  };

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
            <Button
              onPress={showAlert}
              title="Async Alert"
              colors={['bg-gray-300', '#D6D8DB']}
            />
          </>
        )}
      </Padding>
    </Layout>
  );
};

export default PersonalAccount;
