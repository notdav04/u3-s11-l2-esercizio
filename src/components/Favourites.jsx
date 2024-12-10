import { Col, Row, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const list = useSelector((state) => state.main.favourites);
  return (
    <div className="d-flex justify-content-center mt-5">
      <div>
        <Button
          className="mb-4
        "
        >
          <Link className="text-light text-decoration-none" to={"/"}>
            Back to Home
          </Link>
        </Button>
        <h2>Favourites:</h2>
        <Row>
          {list.map((element, index) => {
            return (
              <Col
                className="border border-1 border-primary rounded-3 mb-2"
                key={index}
                xs={10}
              >
                <Link to={`/${element}`}>{element}</Link>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Favourites;
