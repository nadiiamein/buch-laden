export default class BookstoreService  {

 data =   [
        {
            id: 1,
            title: 'JScript',
            author: 'jJson',
            price: 42,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51OSfcdkOjL._SX322_BO1,204,203,200_.jpg'

        },
        {
          id: 2,
          title: 'React',
          author: 'ReRan',
          price: 50,
          coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51OSfcdkOjL._SX322_BO1,204,203,200_.jpg'
      },

      ];
    getBooks() {
        return new Promise((resolve) => {
            setTimeout(( ) => {
                resolve(this.data)
            }, 700);
        })
    }
}