import React, { useState, useEffect } from 'react';
// import { TouchableOpacity } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';

import {} from '../../store/modules/auth/actions';
import { ModalDetail } from '../../components/Modal';

import { Container, PackList, TextWarning, IconWarning } from './styles';
import Logo from '../../utils/logo';
import images from '../../utils/images';
import { CardProblem } from '../../components/Card';
import api from '../../services/api';

export default function Problems({ navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [packOnDetail, setPackOnDetail] = useState(false);
  const [fetch, setFetch] = useState(false);
  const [packs, setPacks] = useState([]);
  async function getPacks() {
    try {
      setFetch(true);
      const response = await api.get('/problems/list');

      setPacks(response.data);
      setFetch(false);
    } catch (error) {
      console.log(error);
      setFetch(false);
    }
  }
  useEffect(() => {
    getPacks();
  }, []);

  const renderPacks = ({ item }) => {
    return CardProblem(
      item,
      navigation,
      setIsModalVisible,
      isModalVisible,
      setPackOnDetail
    );
  };
  function emptyListWarn() {
    return (
      <Container>
        <IconWarning name="chevron-down" />
        <TextWarning>Você não possui entregas cadastradas</TextWarning>
        {/* <IconWarning name="frown" /> */}
        <TextWarning>Deslize para baixo para atualizar!</TextWarning>
      </Container>
    );
  }

  // const dispatch = useDispatch();
  return (
    <Container>
      <Logo source={images.logo} />
      <PackList
        refreshing={fetch}
        ListEmptyComponent={emptyListWarn()}
        onRefresh={() => getPacks()}
        data={packs}
        renderItem={(pack) => renderPacks(pack)}
        keyExtractor={({ id }) => String(id)}
      />
      <ModalDetail
        isVisible={isModalVisible}
        toogleFunction={setIsModalVisible}
        title="Detalhes"
        item={packOnDetail.packages}
      />
    </Container>
  );
}
