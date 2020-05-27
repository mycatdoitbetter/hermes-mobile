import ImagePicker from 'react-native-image-picker';
import FormData from 'form-data';
import api from '../services/api';

export const options = {
  title: 'Selecione um novo avatar',
  chooseFromLibraryButtonTitle: 'Escolher na biblioteca',
  takePhotoButtonTitle: 'Tirar foto agora',
  cancelButtonTitle: 'Cancelar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export function showImagePicker(setuploadedAvatar) {
  ImagePicker.showImagePicker(options, async (response) => {
    if (response.didCancel) {
      return console.log('User cancelled image picker');
    }
    if (response.error) {
      return console.log('ImagePicker Error: ', response.error);
    }

    // You can also display the image using data:
    const source = { uri: `data:image/jpeg;base64,${response.data}` };
    const formData = new FormData();
    formData.append('file', source);

    setuploadedAvatar(source);
  });
}
