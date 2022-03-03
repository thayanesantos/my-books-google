import React, { useState } from 'react';
import { GoogleBooksApi } from './api/google-books';
import { Result } from './models/result';
import {
  Search,
  Grid,
  Header,
  Segment,
  Label,
  Input,
  Container,
  Visibility,
  Dropdown,
  GridRow,
  Button,
  Card,
  Image,
  Item,
  Pagination,
  Menu,
  Rating, Modal
} from 'semantic-ui-react';


var Diamond = require('./img/book-img.png');

const api = new GoogleBooksApi();


function App() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false);
  const [textSearch, setTextSearch] = useState<string>('');
  const [results, setResults] = useState<Result | any>(null);
  const searchBooksEvent = (event: any) => {
    let { value } = event.target;
    if (value.length > 1) {
      api.getBooks(value, 1).then(data => setResults(data))
    }
    setTextSearch(value)
  }

  return (

    <div className="App">
      <header className="App-header">
        <Grid centered>
          <Grid.Row centered>
            <Menu borderless>
              <Menu.Item>
                <Image size='mini' src={Diamond} />
              </Menu.Item>
              {/* <Menu.Item>Books</Menu.Item> */}
              <Menu.Item header>
                <Input value={textSearch} onChange={searchBooksEvent} icon='search' placeholder='Search...' />
              </Menu.Item>
            </Menu>
          </Grid.Row>
        </Grid>
      </header>
      {/* <div className='d-flex align-items-center justify-content-between'>
        <Modal
          closeIcon
          open={open}
          trigger={<Button className='w-100 button-details'>Mais detalhes</Button>}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
        >
          <Header content='Detalhes' />
          <Modal.Content>
            <div>
              <Rating />
            </div>
            <span>Autor:</span>
            <p>{item.volumeInfo.authors}</p>

            <span>Editora:</span>
            <p>{item.volumeInfo.publisher}</p>

          </Modal.Content>
        </Modal>
      </div> */}
      <div>
        <Grid columns={3} container doubling stackable stretched centered>
          {results && results.items.map((obj: any) => (

            <Grid.Column>
              <Segment>

                <Item.Group divided>
                  <Item>
                    <Item.Image size='tiny' src={obj.volumeInfo.imageLinks ? obj.volumeInfo.imageLinks.smallThumbnail : 'https://via.placeholder.com/128x186'} />
                    <Item.Content>

                      <Item.Header id="title-card-book">{obj.volumeInfo.title} </Item.Header>
                      <Item.Meta>
                        <p>{obj.volumeInfo.publisher}</p>
                        <hr />
                        <span>{obj.volumeInfo.authors}</span>
                      </Item.Meta>
                      {/* <Item.Description>
                      A description which may flow for several lines and give context to the content.
                    </Item.Description> */}
                      <p>Language {obj.volumeInfo.language}</p>
                    </Item.Content>
                  </Item>



                  {/*                 
                <Card.Header>{item.volumeInfo.title}</Card.Header>
                <p>{item.volumeInfo.authors}</p>
                <p>{item.volumeInfo.publisher}</p>
                <p>Language {item.volumeInfo.language}</p>  */}

                </Item.Group>
              </Segment>

            </Grid.Column>
          ))}

        </Grid>

        <Grid centered>
          <Grid.Column>
            <Pagination
              defaultActivePage={1}
              firstItem={null}
              lastItem={null}
              pointing
              secondary
              totalPages={3}
            />
          </Grid.Column>
        </Grid>

      </div>
    </div>
  );
}

export default App;
