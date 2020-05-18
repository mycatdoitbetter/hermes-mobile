import React from 'react';
// import { TouchableOpacity } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';

import {} from '../../store/modules/auth/actions';

import { Container, PackList } from './styles';
import Logo from '../../utils/logo';
import images from '../../utils/images';
import { CardPack } from '../../components/Card';

export default function Packs() {
  // const user = useSelector((state) => state.user.profile);
  const packsMock = [
    {
      id: 1,
      product: 'Sapato',
      canceled_at: null,
      start_date: null,
      end_date: null,
      createdAt: '2020-05-08T19:25:48.681Z',
      updatedAt: '2020-05-08T19:25:48.681Z',
      recipient: {
        name: 'André Novo',
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
    {
      id: 2,
      product: 'Deck',
      canceled_at: null,
      start_date: null,
      end_date: null,
      createdAt: '2020-05-08T19:25:48.681Z',
      updatedAt: '2020-05-08T19:25:48.681Z',
      recipient: {
        name: 'André 2',
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
        name: 'deliveryman2',
        email: 'deliveryman@gmail.com',
        cpf: '123.123.123-22',
        avatar: null,
      },
    },
    {
      id: 3,
      product: 'Decasdasdasdasdasdasdasdk',
      canceled_at: null,
      start_date: null,
      end_date: null,
      createdAt: '2020-05-08T19:25:48.681Z',
      updatedAt: '2020-05-08T19:25:48.681Z',
      recipient: {
        name: 'André qqweqw2',
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
        name: 'deliveryman2',
        email: 'deliveryman@gmail.com',
        cpf: '123.123.123-22',
        avatar: null,
      },
    },
    {
      id: 4,
      product: 'qweqweqweqweqw',
      canceled_at: null,
      start_date: null,
      end_date: null,
      createdAt: '2020-05-08T19:25:48.681Z',
      updatedAt: '2020-05-08T19:25:48.681Z',
      recipient: {
        name: 'André qqwqweqw2',
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
        name: 'deliveryman2',
        email: 'deliveryman@gmail.com',
        cpf: '123.123.123-22',
        avatar: null,
      },
    },
  ];

  const renderPacks = ({ item }) => {
    return CardPack(item);
  };

  return (
    <Container>
      <Logo source={images.logo} />
      <PackList
        data={packsMock}
        renderItem={(pack) => renderPacks(pack)}
        keyExtractor={({ id }) => String(id)}
      />
    </Container>
  );
}
