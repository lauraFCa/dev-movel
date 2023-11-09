import firebase from './firebase';

export default class Storage {
  collection = firebase.firestore().collection('userdata');

  add(content) {
    try {
      this.collection.add(content);
      return 'Dados salvos com sucesso!';
    } catch (e) {
      return 'Ocorreu um problema ao salvar os dados na nuvem!\n' + e;
    }
  }

  edit(index, content) {
    try {
      this.collection.doc(index).set(content);
      return 'Dados alterados com sucesso!';
    } catch (e) {
      return 'Ocorreu um problema ao alterar os dados na nuvem!\n' + e;
    }
  }

  async deleteContent(index) {
    try {
      this.collection.doc(index).delete();
      return 'Dados deletados com sucesso!';
    } catch (e) {
      return 'Ocorreu um problema ao deletar os dados da nuvem!\n' + e;
    }
  }

  async getAll() {
    try {
      const items = [];
      await this.collection.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
      });

      return items;

    } catch (e) {
      console.log('deu ruim' + e);
      return 'Ocorreu um problema ao obter os dados da nuvem!\n' + e;
    }
  }
}
