import { useState } from 'react';
import { SearchBlock, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from '../styles';

export default function ImageFinder({ onSubmit }) {
  const [imageName, setImageName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (imageName.trim() === '') {
      return alert('Введите критерий поиска изображения');
    }

    onSubmit(imageName);
    setImageName('');
  };

  const handleChangeName = e => {
    setImageName(e.target.value.toLowerCase());
  };

  return (
      <SearchBlock>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChangeName}
            value={imageName}
          />

          <SearchFormButton type="submit" >
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>
        </SearchForm>
      </SearchBlock>
  );
}
// class Searchbar extends Component {
//   state = {
//     imageName: '',
//   };

  // handleChangeName = e => {
  //   this.setState({ imageName: e.target.value.toLowerCase() });
  // };

  // handleSubmit = event => {
  //   event.preventDefault();

  //   if (this.state.imageName.trim() === '') {
  //     return alert('Введите критерий поиска изображения');
  //   }

  //   this.props.onSubmit(this.state.imageName);
  //   this.setState({ imageName: '' });
  // };

//   render() {
//     return (
      // <SearchBlock>
      //   <SearchForm onSubmit={this.handleSubmit}>
      //     <SearchFormInput
      //       type="text"
      //       autoComplete="off"
      //       autoFocus
      //       placeholder="Search images and photos"
      //       onChange={this.handleChangeName}
      //       value={this.state.imageName}
      //     />

      //     <SearchFormButton type="submit" >
      //       <SearchFormButtonLabel>Search</SearchFormButtonLabel>
      //     </SearchFormButton>
      //   </SearchForm>
      // </SearchBlock>
//     );
//   }
// }

// export default Searchbar;