import { Card } from 'react-bootstrap';

interface AlbumProps {
  imageSrc: string;
  text: React.ReactNode;
}

const AlbumCard: React.FunctionComponent<AlbumProps> = ({ imageSrc, text }) => (
  <Card>
    <Card.Img variant="top" src={imageSrc} />
    <Card.Body>
      <Card.Text>{text}</Card.Text>
    </Card.Body>
  </Card>
);

export default AlbumCard;
