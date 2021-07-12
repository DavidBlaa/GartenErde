<script>
 import { Col, Container, Row } from 'sveltestrap';
 import {
    Card,
    CardBody,
    CardHeader,
    CardText,
    CardTitle
  } from 'sveltestrap';

import Statistic from '../components/comp/start/statistic.svelte'
import Banner from '../components/comp/start/banner.svelte'
import Topics from '../components/comp/start/topics.svelte'

</script>

<svelte:head>
 <title>Garten Erde</title>
</svelte:head>

<Banner/>
<Topics/>
<Statistic/>


