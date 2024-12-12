import React from 'react';
import CarouselComponent from '../components/CarouselComponent';
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

function Products() {
  return (
    <div>
      {/* Carrusel en la parte superior */}
      <CarouselComponent />
      <br />
      <h3 >Nuestras Poleras</h3>

      
      <CardGroup className="mt-4">
        <Card>
          <CardImg
            alt="Polera Retro Kaka Ac Milan"
            src="https://th.bing.com/th/id/OIP.3_QxVuLOevlPdKfgebbVGwHaIO?rs=1&pid=ImgDetMain"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Polera Retro Kaka Ac Milan</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              "Yo pertenezco a Jesus"
            </CardSubtitle>
            <CardText>
              Representa tu equipo favorito con esta polera retro de Kaká.
              Precio Bs. 390
            </CardText>
            <Button>Comprar</Button>
          </CardBody>
        </Card>

        <Card>
          <CardImg
            alt="Raqueta de tenis"
            src="https://th.bing.com/th/id/OIP.orvbRZUqTxzlb_CfDIC6cAHaJp?w=158&h=206&c=7&r=0&o=5&dpr=2.5&pid=1.7"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Polera Puma</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Polera que te llevara a otro nivel
            </CardSubtitle>
            <CardText>
              Precio Bs. 450
            </CardText>
            <Button>Comprar</Button>
          </CardBody>
        </Card>

        <Card>
          <CardImg
            alt="Raqueta de tenis"
            src="https://th.bing.com/th/id/OIP.WhopWP4tgPiTgiPyMGcqSwAAAA?w=190&h=214&c=7&r=0&o=5&dpr=2.5&pid=1.7"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Polera Adidas</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Polera Edicion Especial
            </CardSubtitle>
            <CardText>
              Precio Bs. 599
            </CardText>
            <Button>Comprar</Button>
          </CardBody>
        </Card>

        <Card>
          <CardImg
            alt="Raqueta de tenis"
            src="https://th.bing.com/th/id/R.4cc200c7e8f542d2b974fc51bf54400b?rik=ClJT2TLGRrekRw&pid=ImgRaw&r=0"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Polera Nike</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Polera De La Seleccion Brasileira
            </CardSubtitle>
            <CardText>
              Precio Bs. 850
            </CardText>
            <Button>Comprar</Button>
          </CardBody>
        </Card>
        <br />
        

        {/* Agregar más tarjetas si es necesario */}
      </CardGroup>
      <br />
      <h3>Nuestras Zapatillas</h3>
      
      
      <CardGroup className="mt-4">
        <Card>
          <CardImg
            alt="Polera Retro Kaka Ac Milan"
            src="https://th.bing.com/th/id/OIP.NTTmYWS0G7EiRLFgnQVNnQHaFU?w=271&h=194&c=7&r=0&o=5&dpr=2.5&pid=1.7"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Nike Air Jordan 1 Mid (Gs)</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Zapatillas ideales para cada situacion.
            </CardSubtitle>
            <CardText>
              Precio Bs. 699
            </CardText>
            <Button>Comprar</Button>
          </CardBody>
        </Card>

        <Card>
          <CardImg
            alt="Raqueta de tenis"
            src="https://th.bing.com/th/id/OIP.MkREuBH2GhlfJ1DDYfeihAHaFe?w=232&h=180&c=7&r=0&o=5&dpr=2.5&pid=1.7"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Zapatillas de Mujer Adidas </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Perfecta Para esas ocasiones
            </CardSubtitle>
            <CardText>
              Precio Bs. 555
            </CardText>
            <Button>Comprar</Button>
          </CardBody>
        </Card>

        <Card>
          <CardImg
            alt="Raqueta de tenis"
            src="https://th.bing.com/th/id/OIP.oxSPQ4byaLeaGabsCNV9ogHaHa?w=186&h=186&c=7&r=0&o=5&dpr=2.5&pid=1.7"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Zapatillas de Futsal Adidas</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Zapatillas Profesionales
            </CardSubtitle>
            <CardText>
              Precio Bs. 1099
            </CardText>
            <Button>Comprar</Button>
          </CardBody>
        </Card>

        <Card>
          <CardImg
            alt="Raqueta de tenis"
            src="https://th.bing.com/th/id/OIP.PnDIviw0i5ANlrnpsJRo8QHaD4?w=290&h=180&c=7&r=0&o=5&dpr=2.5&pid=1.7"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Zapatillas Adidas de Voleibol</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Gana esos Torneos
            </CardSubtitle>
            <CardText>
              Precio Bs.750
            </CardText>
            <Button>Comprar</Button>
          </CardBody>
        </Card>

        {/* Agregar más tarjetas si es necesario */}
      </CardGroup>
      <br />
      <h3>Nuestros Accesorios</h3>
      <br />
      <CardGroup className="mt-4">
        <Card>
          <CardImg
            alt="Polera Retro Kaka Ac Milan"
            src="https://th.bing.com/th?q=Guantes+De+Invierno+Adidas&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=2.5&pid=InlineBlock&mkt=es-XL&cc=BO&setlang=es&adlt=moderate&t=1&mw=247"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Guantes de Invierno Adidas</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Adidas Te Abriga Esta Navidad
            </CardSubtitle>
            <CardText>
              Precio Bs. 150
            </CardText>
            <Button>Comprar</Button>
          </CardBody>
        </Card>

        <Card>
          <CardImg
            alt="Raqueta de tenis"
            src="https://th.bing.com/th/id/OIP.pGDtEPstqEWk_ZWuNENPzAHaHa?w=217&h=217&c=7&r=0&o=5&dpr=2.5&pid=1.7"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Gorra MVP Yankees Strapback</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Que el Beisbol te siga a donde vayas.
            </CardSubtitle>
            <CardText>
              Precio Bs.200
            </CardText>
            <Button>Comprar</Button>
          </CardBody>
        </Card>

        <Card>
          <CardImg
            alt="Raqueta de tenis"
            src="https://th.bing.com/th/id/OIP.k3qW-m-08bGFK5UZ-7VZUQHaF7?w=193&h=180&c=7&r=0&o=5&dpr=2.5&pid=1.7"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Gafas de Sol Adidas</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Llevas estas Gafas a todas partes cpn mucho Estilo.
            </CardSubtitle>
            <CardText>
              Precio Bs. 299
            </CardText>
            <Button>Comprar</Button>
          </CardBody>
        </Card>

        <Card>
          <CardImg
            alt="Raqueta de tenis"
            src="https://th.bing.com/th/id/OIP.jmEJjIjFAnJedm5iHgjk3AHaHa?rs=1&pid=ImgDetMain"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Raqueta de tenis</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Raqueta profesional
            </CardSubtitle>
            <CardText>
              Perfecta para jugadores de todos los niveles.
            </CardText>
            <Button>Comprar</Button>
          </CardBody>
        </Card>

        {/* Agregar más tarjetas si es necesario */}
      </CardGroup>
    </div>
  );
}

export default Products;
