<script>
   import {
    Container,
    Row,
    Col,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'sveltestrap';

</script>

<Navbar color="light" light expand="md">
  <span>&copy; 2021 David Schöne</span>
 <Nav class="ms-auto" navbar>
  <NavItem>
    <NavLink href="/contact">Kontakt</NavLink>
  </NavItem>
  <NavItem>
   <NavLink href="/about">Über uns</NavLink>
 </NavItem>
 <NavItem>
  <NavLink href="/inprint">Impressum</NavLink>
</NavItem>
<NavItem>
 <NavLink href="/datapolicy">Datenzeug</NavLink>
</NavItem>
 </Nav>
</Navbar>
