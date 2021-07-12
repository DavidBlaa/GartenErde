<script>
import { Stats } from '../../../stores/store.js'
import { Col, Container, Row, Icon} from 'sveltestrap';

$:console.log($Stats);

</script>
<Container>
<div class="stats-container">
 <Row >
  <Col>
   <div class="stats-object">
      <div class="stats-object-icon">

      </div>
      <div class="stats-object-name">
          Pflanzen
      </div>
      <div class="stats-object-number">
          {$Stats.Pflanzen}
      </div>
   </div>
  </Col>
  <Col>
   <div class="stats-object">
      <div class="stats-object-icon">

      </div>
      <div class="stats-object-name">
       Tiere
      </div>
      <div class="stats-object-number">
          {$Stats.Tiere}
      </div>
   </div>
  </Col>
  <Col>
   <div class="stats-object">
      <div class="stats-object-icon">

      </div>
      <div class="stats-object-name">
        Gärten
      </div>
      <div class="stats-object-number">
          {$Stats.Gärten}
      </div>
   </div>
  </Col>
  <Col>
   <div class="stats-object">
      <div class="stats-object-icon">

      </div>
      <div class="stats-object-name">
       Interaktionen
      </div>
      <div class="stats-object-number">
          {$Stats.Interaktionen}
      </div>
   </div>
  </Col>
 </Row>
</div>
</Container>



<style>
 .stats-container {
     color: white;
     background-color: yellowgreen;
     background-image: url("vladstudio_leaf_wallpaper.jpg");
     margin: auto;
     padding:40px;
     border-radius: 5px;
     margin-bottom: 20px;

 }

 .stats-object {
     text-align: center;
     vertical-align: middle;
     font-weight: bold;
 }

 .stats-object-icon {
     font-size: 30px;
     margin: 5px;
 }

 .stats-object-name {
     font-size: 20px;
     font-weight: lighter;
     margin: 5px;
 }

 .stats-object-number {
     font-size: 40px;
     margin: 5px;
 }
</style>