import { Card } from 'react-bootstrap';
import './index.scss';

interface AlbumProps {
  imageSrc: string;
  text: React.ReactNode;
}

const AlbumCard: React.FunctionComponent<AlbumProps> = ({ imageSrc, text }) => (
  <Card className="AlbumCard mb-4 box-shadow">
    <Card.Img variant="top" src={imageSrc} />
    <Card.Body>
      <Card.Text>{text}</Card.Text>
    </Card.Body>
  </Card>
);

export default AlbumCard;
