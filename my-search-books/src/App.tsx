import React from 'react';
import { Search, Grid, Header, Segment, Label } from 'semantic-ui-react';
import { Button, Card, Image } from 'semantic-ui-react';
import { Pagination } from 'semantic-ui-react';
import { Rating } from 'semantic-ui-react';
import { Icon, Modal } from 'semantic-ui-react';


function ModalExampleCloseIcon() {
  const [open, setOpen] = React.useState(false)

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
  return (
    <div className="App">
      <header className="App-header">
        <Grid>
          <Grid.Column width={12}>
            <Search />
          </Grid.Column>

          <Grid.Column width={12}>

          </Grid.Column>
        </Grid>
      </header>
      <Card.Group>
        <Card>
          {ModalExampleCloseIcon()}
          <Card.Content>
            <Image
              floated='left'
              size='tiny'
              src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
            />
            <Rating />
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          {ModalExampleCloseIcon()}
          <Card.Content>
            <Image
              floated='left'
              size='tiny'
              src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
            />
            <Rating />
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          {ModalExampleCloseIcon()}
          <Card.Content>
            <Image
              floated='left'
              size='tiny'
              src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
            />
            <Rating />
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          {ModalExampleCloseIcon()}
          <Card.Content>
            <Image
              floated='left'
              size='tiny'
              src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
            />
            <Rating />
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          {ModalExampleCloseIcon()}
          <Card.Content>
            <Image
              floated='left'
              size='tiny'
              src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
            />
            <Rating />
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          {ModalExampleCloseIcon()}
          <Card.Content>
            <Image
              floated='left'
              size='tiny'
              src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
            />
            <Rating />
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          {ModalExampleCloseIcon()}
          <Card.Content>
            <Image
              floated='left'
              size='tiny'
              src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
            />
            <Rating />
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          {ModalExampleCloseIcon()}
          <Card.Content>
            <Image
              floated='left'
              size='tiny'
              src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
            />
            <Rating />
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
        </Card>

      </Card.Group>
      <div>
        <Pagination defaultActivePage={5} totalPages={10} />
      </div>
    </div>
  );
}

export default App;
