<script>


 import { Col, Container, Row } from 'sveltestrap';
 import {
    Card,
    CardBody,
    CardHeader,
    CardText,
    CardTitle
  } from 'sveltestrap';
</script>

<svelte:head>
 <title>Garten Erde</title>
</svelte:head>






<Container>

<h1>Garten Erde</h1>
<p>Anbau in Harmonie mit der Natur.</p>

 <Row>
   <Col>
    <Card class="mb-3">
      <CardHeader>
        <CardTitle>Lexikon</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          Nachschlagewerk für Nutzplfanzen und Lebenwesen. Die Filtermöglichkeiten beziehen sich neben Name auch auf Interkationen,
          Zeiten und Beflanzungseigenschaften.
        </CardText>
      </CardBody>
    </Card>
   </Col>
   <Col>
    <Card class="mb-3">
      <CardHeader>
        <CardTitle>Saisonkalendar</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          Wann wird welches Gemüse angepflanzt oder geerntet? Hier findest du einen Überblick.
        </CardText>
      </CardBody>
    </Card>
   </Col>
   <Col>
   <Card class="mb-3">
    <CardHeader>
      <CardTitle>Gartenplaner</CardTitle>
    </CardHeader>
    <CardBody>
      <CardText>
        Im Bezug auf Mischkultur hilft der Gartenplaner bei der Bepflanzung.
      </CardText>
    </CardBody>
  </Card>
  </Col>
   <Col>
    <Card class="mb-3">
      <CardHeader>
        <CardTitle>Beziehungskiste</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          Es gibt viele Möglichkeiten Pflanzen, bei der Positionierung auf einem Beet, zu kombinieren.
         Manche sind gut und mansche sind schlecht. Hier findest du eine Übersicht über die hier genannten Interaktion.
        </CardText>
      </CardBody>
    </Card>
   </Col>
 </Row>
</Container>