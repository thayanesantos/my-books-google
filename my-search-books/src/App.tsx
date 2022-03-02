import React, { useState } from 'react';
import { GoogleBooksApi } from './api/google-books';
import { Search, Grid, Header, Segment, Label, Input, Container } from 'semantic-ui-react';
import { Button, Card, Image, Item } from 'semantic-ui-react';
import { Pagination } from 'semantic-ui-react';
import { Rating } from 'semantic-ui-react';
import { Icon, Modal } from 'semantic-ui-react';
import { Result } from './models/result';


const api = new GoogleBooksApi();

function ModalExampleCloseIcon() {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button></Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='archive' content='Archive Old Messages' />
      <Modal.Content>
        <p>
          Your inbox is getting full, would you like us to enable automatic
          archiving of old messages?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

function App() {
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
        <Grid centered columns={2}>
          <Grid.Column>
            <Input value={textSearch} onChange={searchBooksEvent} icon='search' placeholder='Search...' />

          </Grid.Column>
        </Grid>
      </header>
      <div>

      </div>
      <Grid columns={3} container doubling stackable stretched>
        {results && results.items.map((item: any) => (

          <Grid.Column>

            <Segment>
              <Item.Group divided>
                <Item>
                  <Item.Image size='tiny' src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : 'https://via.placeholder.com/128x186'} />
                  <Item.Content>
                    <Item.Header as='a'>{item.volumeInfo.title}</Item.Header>
                    <Item.Meta>
                      <p>{item.volumeInfo.publisher}</p>
                      <hr />
                      <span>{item.volumeInfo.authors}</span>
                    </Item.Meta>
                    {/* <Item.Description>
                      A description which may flow for several lines and give context to the content.
                    </Item.Description> */}
                    <p>Language {item.volumeInfo.language}</p>
                  </Item.Content>
                </Item>
                {/* <Image
                  floated='left'
                  size='tiny'
                  src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : 'https://via.placeholder.com/128x186'}
                />
                <Rating />
                <Card.Header>{item.volumeInfo.title}</Card.Header>
                <p>{item.volumeInfo.authors}</p>
                <p>{item.volumeInfo.publisher}</p>
                <p>Language {item.volumeInfo.language}</p> */}

              </Item.Group>
            </Segment>

          </Grid.Column>
          //  <Card.Content>
          //  </Card.Content>
          //  <Card>
          //   {/* {ModalExampleCloseIcon()} */}
          //  </Card>
        ))}

      </Grid>

      <Grid centered columns={2}>
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
  );
}

export default App;
