import React from 'react'
import { GroupMenuItem, MenuItem } from '../../components/SideBar'

const Menu = (
  <GroupMenuItem title="Registros" icon="home" to="/home">
    <MenuItem title="Ciudadanos" to="/home/citizen_main" />
    <MenuItem title="Estados" to="/home/states_main" />
    <MenuItem title="Municipios" to="/home/towns_main" />
  </GroupMenuItem>
)

export default Menu