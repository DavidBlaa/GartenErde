<script>
 import { Col, Container, Row } from 'sveltestrap';
 import {
    Card,
    CardBody,
    CardHeader,
    CardText,
    CardTitle
  } from 'sveltestrap';

import Icon from '../../layout/icon.svelte'

</script>

<Container>
 <Row>
   <Col>
    <a href="/lexikon">
    <Card class="mb-3">
      <CardHeader>
        <CardTitle><Icon name="book"/> Lexikon</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          Nachschlagewerk für Nutzplfanzen und Lebenwesen. Die Filtermöglichkeiten beziehen sich neben Name auch auf Interkationen,
          Zeiten und Beflanzungseigenschaften.
        </CardText>
      </CardBody>
    </Card>
    </a>
   </Col>
   <Col>
    <a href="/interactions">
    <Card class="mb-3">
      <CardHeader>
        <CardTitle><Icon name="share-alt-square"/> Beziehungskiste</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          Es gibt viele Möglichkeiten Pflanzen, bei der Positionierung auf einem Beet, zu kombinieren.
         Manche sind gut und mansche sind schlecht. Hier findest du eine Übersicht über die hier genannten Interaktion.
        </CardText>
      </CardBody>
    </Card>
    </a>
   </Col>

   <Col>
    <Card class="mb-3">
      <CardHeader>
        <CardTitle> <Icon name="calendar"/> Saisonkalendar</CardTitle>
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
       <CardTitle><Icon name="cubes"/> Gartenplaner</CardTitle>
     </CardHeader>
     <CardBody>
       <CardText>
         Im Bezug auf Mischkultur hilft der Gartenplaner bei der Bepflanzung.
       </CardText>
     </CardBody>
   </Card>
   </Col>
 </Row>
</Container>

<style>
   a, a:visited, a:hover, a:active  {
    text-decoration: none;
    color:darkslategrey;
  }
</style>