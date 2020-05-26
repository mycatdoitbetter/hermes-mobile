import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import {} from '../../store/modules/auth/actions';
import { ModalDetail } from '../../components/Modal';
import { Container, PackList, TextWarning, IconWarning } from './styles';
import Logo from '../../utils/logo';
import images from '../../utils/images';
import { CardPack } from '../../components/Card';

export default function Packs({ navigation }) {
  // const user = useSelector((state) => state.user.profile);
  // const [isExpanded, setExpanded] = useState(true);
  const [packs, setPacks] = useState([]);
  const [fetch, setIsFetch] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [load, setLoad] = useState({});
  const [packOnDetail, setPackOnDetail] = useState({});

  async function getPacks() {
    try {
      setIsFetch(true);
      const response = await api.get('/packages/list');

      setPacks(response.data);
      setIsFetch(false);
    } catch (error) {
      console.log(error);
      setIsFetch(false);
    }
  }
  useEffect(() => {
    getPacks();
  }, [load]);

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
  return (
    <Container>
      <Logo source={images.logo} />

      <PackList
        data={packs}
        refreshing={fetch}
        onRefresh={() => getPacks()}
        ListEmptyComponent={() => emptyListWarn()}
        renderItem={({ item }) => {
          return CardPack(
            item,
            navigation,
            setIsModalVisible,
            isModalVisible,
            setPackOnDetail
          );
        }}
        keyExtractor={({ id }) => String(id)}
      />

      <ModalDetail
        isVisible={isModalVisible}
        toogleFunction={setIsModalVisible}
        title="Detalhes"
        item={packOnDetail}
      />
    </Container>
  );
}
