<script>
import { Stats } from '../../../stores/store.js'
import Icon from '../../layout/icon.svelte'
import { Col, Container, Row} from 'sveltestrap';

$:console.log($Stats);

</script>
<Container>
<div class="stats-container">
 <Row >
  <Col>
   <div class="stats-object">
      <div class="stats-object-icon">
        <Icon name="seedling" title="Pflanzen"/>
      </div>
      <div class="stats-object-name">
          Sorten
      </div>
      <div class="stats-object-number">
          {$Stats.Sorten}
      </div>
   </div>
  </Col>
  <Col>
   <div class="stats-object">
      <div class="stats-object-icon">
        <Icon name="bug" title="Tiere"/>
      </div>
      <div class="stats-object-name">
       Tiere
      </div>
      <div class="stats-object-number">
          {$Stats.TierArten}
      </div>
   </div>
  </Col>
  <Col>
    <div class="stats-object">
       <div class="stats-object-icon">
         <Icon name="link" title="Beziehungen"/>
       </div>
       <div class="stats-object-name">
        Beziehungen
       </div>
       <div class="stats-object-number">
           {$Stats.Interaktionen}
       </div>
    </div>
   </Col>
  <Col>
   <div class="stats-object">
      <div class="stats-object-icon">
        <Icon name="cubes" title="Gärten"/>
      </div>
      <div class="stats-object-name">
        Gärten
      </div>
      <div class="stats-object-number">
          {$Stats.Gärten}
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
     background-image: url("./vladstudio_leaf_wallpaper.jpg");
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