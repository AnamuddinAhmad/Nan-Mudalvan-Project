import React from "react";
import Unavbar from "./Unavbar";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Componenets/Footer";

const Uhome = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
      <Unavbar />
      {/* Best Seller Section */}
      <div className="py-8 px-4">
        <h1 className="text-center text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-8">
          Best Seller
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          <Card className="w-72">
            <Link to="/uproducts">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ_1FQJg0M-TJpOgMEkJyL8g8rycH6H4hP6aphbuGy3ZhW9AFYm"
              />
            </Link>
            <Card.Body>
              <Card.Title className="text-center">The Great Gatsby<br />Gatsby </Card.Title>
            </Card.Body>
          </Card>

          <Card className="w-72">
            <Link to="/uproducts">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQRikRhFvkJtM_NMAd5dClj-jUefW4KhAqRpN1oc8piaGpu20xS"
              />
            </Link>
            <Card.Body>
              <Card.Title className="text-center">Lolita da <br/> adesa altorio</Card.Title>
            </Card.Body>
          </Card>

          <Card className="w-72">
            <Link to="/uproducts">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQRh2egl2mK5i8fo9BCAujI6TuPtfh3-x_jZaNhpRym691UjWUU"
              />
            </Link>
            <Card.Body>
              <Card.Title className="text-center">A Passage<br/> to India</Card.Title>
            </Card.Body>
          </Card>

          <Card className="w-72">
            <Link to="/uproducts">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQiZJrvHfx5EhqoS5axtox6kL4Qdgq9vs68aZtu2TZzr-Ew_9SY"
              />
            </Link>
            <Card.Body>
              <Card.Title className="text-center">Their Eyes Were<br/> Watching God</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Top Recommendation Section */}
      <div className="py-8 px-4">
        <h1 className="text-center text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-8">
          Top Recommendation
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          <Card className="w-72">
            <Link to="/uproducts">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY9w4z2pDWpo0mwTuNRcXpgTyJKjzSgrAki-ab9wcEgzlYbb_o"
              />
            </Link>
            <Card.Body>
              <Card.Title className="text-center">The Color Purple</Card.Title>
            </Card.Body>
          </Card>

          <Card className="w-72">
            <Link to="/uproducts">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQWNr8JJo6yKLjSlxsOMZkHICpInZmOWLSch2raLfLsHpEZXbQ-"
              />
            </Link>
            <Card.Body>
              <Card.Title className="text-center">Beloved</Card.Title>
            </Card.Body>
          </Card>

          <Card className="w-72">
            <Link to="/uproducts">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTxfH7nQDHh4AUxDwC6IctRaTYHo0ctr6BP_lIXnt7dG8QZveMF"
              />
            </Link>
            <Card.Body>
              <Card.Title className="text-center">Catch-22</Card.Title>
            </Card.Body>
          </Card>

          <Card className="w-72">
            <Link to="/uproducts">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ7CgG5r4yT6h42Wfbryij50dlJiJdJ7zqFKbZF1O_3aXp57jwp"
              />
            </Link>
            <Card.Body>
              <Card.Title className="text-center">Dracula</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Uhome;
