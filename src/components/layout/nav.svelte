<script lang="ts">
   import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'sveltestrap';

  import Icon from '../../components/layout/icon.svelte'

  let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
</script>

<Navbar color="light" light expand="md">
 <NavbarBrand href="/"><Icon name="globe" title="Garten Erde"/> Garten Erde v0.1 </NavbarBrand>
 <NavbarToggler on:click={() => (isOpen = !isOpen)} />
 <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
   <Nav class="ms-auto" navbar>
     <NavItem>
       <NavLink href="/lexikon">Lexikon</NavLink>
     </NavItem>
     <NavItem>
      <NavLink href="/interactions">Beziehungen</NavLink>
    </NavItem>

     <Dropdown nav inNavbar>
       <DropdownToggle nav caret>Options</DropdownToggle>
       <DropdownMenu end>
         <DropdownItem>Option 1</DropdownItem>
       </DropdownMenu>
     </Dropdown>
   </Nav>
 </Collapse>
</Navbar>
