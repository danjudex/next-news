import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import AlbumCard from '~/components/AlbumCard';
import { getEverything } from '../utils/newsapi';
import { NextPage } from 'next';
import { NewsItem } from '../interfaces';

interface HomePageProps {
  newsList: NewsItem[];
}

const newsListRender = (newsList: NewsItem[]) =>
  newsList.map(item => (
    <Col md="4">
      <AlbumCard
        key={item.source.id}
        imageSrc={item.urlToImage}
        text={item.title}
      />
    </Col>
  ));

const HomePage: NextPage<HomePageProps> = ({ newsList }) => (
  <main role="main">
    <Jumbotron className="text-center">
      <Container>
        <h1 className="jumbotron-heading">Album example</h1>
        <p className="lead text-muted">
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </p>
        <p>
          <a href="#" className="btn btn-primary my-2">
            Main call to action
          </a>{' '}
          <a href="#" className="btn btn-secondary my-2">
            Secondary action
          </a>
        </p>
      </Container>
    </Jumbotron>

    <div className="album py-5 bg-light">
      <Container>
        <Row>{newsListRender(newsList)}</Row>
      </Container>
    </div>
    <footer className="text-muted">
      <Container>
        <p className="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>
          Album example is © Bootstrap, but please download and customize it for
          yourself!
        </p>
        <p>
          New to Bootstrap? <a href="../../">Visit the homepage</a> or read our{' '}
          <a href="../../getting-started/">getting started guide</a>.
        </p>
      </Container>
    </footer>
  </main>
);

HomePage.getInitialProps = async () => {
  const res = await getEverything({ q: 'react' });

  return { newsList: res.articles };
};

export default HomePage;
