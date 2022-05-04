import { useState, useEffect } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import { GlobalStyles } from 'styles';
import { Container } from '../styles';

export function App() {
  const [imageName, setImageName] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFormChange = data => {
    setImageName(data)
    setImages([])
    setPage(1)
  };

  const selectImage = largeImageURL => {
    setSelectedImage(largeImageURL)
    setShowModal(true)
  };

  const pageChange = () => {
    setPage(prevState => [prevState.page + 1 ]);
  };

  const toggleModal = () => {
    setShowModal(false)
    setSelectedImage('')
  };

  const showError = () => {
    alert('Oooops, something went wrong!')
  };

  useEffect(() => {
    if (imageName === '') {
      return;
    }

    const getImages = () => {
      setLoading(true);

      return fetch(
        `https://pixabay.com/api/?q=${imageName}&page=${page}&key=26662147-37bf5d980befc030dc3511be2&image_type=photo&orientation=horizontal&per_page=6`)
        .then(res => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          return res.json();
        });
    };

    if (setImageName !== imageName ||
      setPage !== page
    ) {
      getImages(imageName, page)
        .then(image =>
          setImages([...images, ...image.hits]))
        .catch(showError)
        .finally(() => setLoading(false));
    }
  }, [images, imageName, page]);

  return (
    <Container>
      <Searchbar onSubmit={handleFormChange} />
      <ImageGallery images={images} onImgClick={selectImage} />
        
      {(images.length > 0) && <Button onClick={pageChange}></Button>}

      {loading && <Loader />}

      {showModal &&
        <Modal onClose={toggleModal}>
          <img src={selectedImage} alt="" />
        </Modal>}
        
      <GlobalStyles />
    </Container>
  );
}

// export class App extends Component {
//   state = {
//     imageName: '',
//     images: [],
//     loading: false, 
//     page: 1,
//     showModal: false, 
//     selectedImage: null,
//   };

  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevState.imageName !== this.state.imageName ||
  //     prevState.page !== this.state.page
  //     ) {
  //     const { imageName, page, images} = this.state;
  //     this.getImages(imageName, page)
  //       .then(image =>
  //         this.setState({
  //           images: [...images, ...image.hits],
  //         })
  //       )
  //       .catch(this.showError)
  //       .finally(() => this.setState({ loading: false }));
  //   }

  // };

  // showError = () => {
  //   alert('Oooops, somethig went wrong!')
  // }

  // getImages = () => {
  //   const { imageName, page } = this.state;
    
  //   this.setState({ loading: true });

  //   return fetch(
  //     `https://pixabay.com/api/?q=${imageName}&page=${page}&key=26662147-37bf5d980befc030dc3511be2&image_type=photo&orientation=horizontal&per_page=6`)
  //     .then(res => {
  //       if (!res.ok) {
  //         throw Error(res.statusText);
  //       }
  //       return res.json();
  //     }).finally(() => this.setState({ loading: false }));
  // };

  // handleFormChange = data => {
  //   this.setState({
  //     imageName: data,
  //     images: [],
  //     page: 1,
  //   });
  // };

  // pageChange = () => {
  //   this.setState(prevState => ({ page: prevState.page + 1 }));
  // };
  
  // toggleModal = () => {
  //   this.setState({
  //     showModal: false,
  //     selectedImage: '',
  //   });
  // };

  // selectImage = largeImageURL => {
  //   this.setState({
  //     selectedImage: largeImageURL,
  //     showModal: true,
  //   });
  // };

//   render() {

//     const { images, showModal, loading } = this.state;
    
    
//     return (
//       <Container>
//         <Searchbar onSubmit={this.handleFormChange} />
//         <ImageGallery images={images} onImgClick={this.selectImage} />
        
//         {(images.length > 0) && <Button onClick={this.pageChange}></Button>}

//         {loading && <Loader />}

//         {showModal &&
//         <Modal onClose={this.toggleModal}>
//             <img src={this.state.selectedImage} alt="" />
//           </Modal>}
        
//         <GlobalStyles/>
//       </Container>
//     );
//   }
// }