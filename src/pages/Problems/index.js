import React, { useState, useEffect } from 'react';
// import { TouchableOpacity } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';

import {} from '../../store/modules/auth/actions';
import { ModalDetail } from '../../components/Modal';

import { Container, PackList } from './styles';
import Logo from '../../utils/logo';
import images from '../../utils/images';
import { CardProblem } from '../../components/Card';
import api from '../../services/api';

export default function Packs({ navigation }) {
  // const user = useSelector((state) => state.user.profile);
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
  const packsMock = [
    {
      id: 1,

      title: 'Titulo do problema',
      description: 'Corpo do problema',
      packages: {
        id: 1,
        product: 'Sapato',
        start_date: null,
        recipients: {
          id: 1,
          name: 'André Novo',
          cpf: '60032270329',
          street: 'Serra da Arratanha',
          number: '600',
          complement: 'Jardins da serra, q11 lt22',
          state: 'CE',
          city: 'Maracanaú',
          cep: '61910000',
        },
        deliveryman: {
          id: 2,
          name: 'deliveryman',
          avatar: {
            url:
              'http://localhost:3333/files/d312546e15131238955d92d8629b55b2.jpg',
            id: 1,
            name: 'foto_perfil.jpg',
            path: 'd312546e15131238955d92d8629b55b2.jpg',
            createdAt: '2020-05-08T19:44:39.703Z',
            updatedAt: '2020-05-08T19:44:39.703Z',
          },
        },
      },
    },
  ];
  const renderPacks = ({ item }) => {
    return CardProblem(
      item,
      navigation,
      setIsModalVisible,
      isModalVisible,
      setPackOnDetail
    );
  };

  // const dispatch = useDispatch();
  return (
    <Container>
      <Logo source={images.logo} />
      <PackList
        refreshing={fetch}
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
