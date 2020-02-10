import { Card, Button } from 'react-bootstrap';

interface AlbumProps {
  imageSrc: string;
  title: string;
  text: React.ReactNode;
}

const AlbumCard: React.FunctionComponent<AlbumProps> = ({
  imageSrc,
  title,
  text
}) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imageSrc} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
);

export default AlbumCard;
