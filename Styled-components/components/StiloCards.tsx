import React from 'react';
import styled from 'styled-components/native';

interface ProfileCardProps {
  title: string;
  content: string;
}

const Card = styled.View`
  background-color: #fff;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const Content = styled.Text`
  font-size: 16px;
  color: #666;
`;

const ProfileCard: React.FC<ProfileCardProps> = ({ title, content }) => (
  <Card>
    <Title>{title}</Title>
    <Content>{content}</Content>
  </Card>
);

export default ProfileCard;
