<script>
import {  Container, Row, Col } from 'sveltestrap';

export let plant;

</script>

<Container>
<Row>
 <Col>Breite</Col>
 <Col>{plant.Width}</Col>
</Row>
<Row>
 <Col>Tiefe</Col>
 <Col>{plant.Height}</Col>
</Row>
<Row>
 <Col>Wurzeltiefe</Col>
 <Col>{plant.RootDepth}</Col>
</Row>
<Row>
 <Col>Nähstoff Anspruch</Col>
 <Col>{plant.NutrientClaim}</Col>
</Row>
<Row>
 <Col>Standort</Col>
 <Col>{plant.LocationType}</Col>
</Row>
<Row>
 <Col>Sähtiefe</Col>
 <Col>{plant.SowingDepth}</Col>
</Row>
</Container>