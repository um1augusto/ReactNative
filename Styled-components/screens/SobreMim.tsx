import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ProfileCard from '../components/StiloCards';

const AboutMe = () => {
  return (
    <ScrollView style={styles.container}>
      <ProfileCard
        title="Sobre Mim"
        content="Me chamou Augusto faço curso tecnico no senac e estou cursando Analise e desenvolvimento de Sistemas"
      />
      <ProfileCard
        title="Experiência"
        content="Tenho experiencia em Banco de dados, JavaScript, Java e TypeScript"
      />
      <ProfileCard
        title="Educação"
        content="Graduado em Ciência da Computação pela Universidade ABC. Participação em vários cursos e workshops sobre desenvolvimento mobile e design de interfaces."
      />
      {/* Adicione mais cards conforme necessário */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AboutMe;
