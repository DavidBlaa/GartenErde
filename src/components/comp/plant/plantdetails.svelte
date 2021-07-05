<script>
import {  Container, Row, Col } from 'sveltestrap';

export let Width;
export let Height;
export let RootDepth;
export let NutrientClaim;
export let LocationType;
export let SowingDepth;

</script>

<Container>
<Row>
 <Col>Breite</Col>
 <Col>{Width}</Col>
</Row>
<Row>
 <Col>Tiefe</Col>
 <Col>{Height}</Col>
</Row>
<Row>
 <Col>Wurzeltiefe</Col>
 <Col>{RootDepth}</Col>
</Row>
<Row>
 <Col>Nähstoff Anspruch</Col>
 <Col>{NutrientClaim}</Col>
</Row>
<Row>
 <Col>Standort</Col>
 <Col>{LocationType}</Col>
</Row>
<Row>
 <Col>Sähtiefe</Col>
 <Col>{SowingDepth}</Col>
</Row>
</Container>