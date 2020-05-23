import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import {} from '../../store/modules/auth/actions';
import { ModalDetail } from '../../components/Modal';
import { Container, PackList } from './styles';
import Logo from '../../utils/logo';
import images from '../../utils/images';
import { CardPack } from '../../components/Card';

export default function Packs({ navigation }) {
  // const user = useSelector((state) => state.user.profile);
  // const [isExpanded, setExpanded] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [packOnDetail, setPackOnDetail] = useState({});
  const packsMock = [
    {
      id: 1,
      isProblem: false,
      product: 'Sapato Preto amadeirado',
      canceled_at: null,
      start_date: null,
      end_date: null,
      createdAt: '2020-05-08T19:25:48.681Z',
      updatedAt: '2020-05-08T19:25:48.681Z',
      recipient: {
        name: 'André SAntos CAstelo ribeiro',
        cpf: '60032270329',
        street: 'Serra da Arratanha',
        number: '600',
        complement: 'Jardins da serra, q11 lt22',
        state: 'CE',
        city: 'Maracanaú',
        cep: '61910000',
      },
      deliveryman_id: {
        id: 2,
        name: 'deliveryman',
        email: 'deliveryman@gmail.com',
        cpf: '123.123.123-22',
        avatar: null,
      },
    },
  ];

  return (
    <Container>
      <Logo source={images.logo} />
      <PackList
        data={packsMock}
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
