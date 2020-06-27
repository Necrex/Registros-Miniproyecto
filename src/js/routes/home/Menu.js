import React from 'react'
import { GroupMenuItem, MenuItem } from '../../components/SideBar'

const Menu = (
  <GroupMenuItem title="Registros" icon="home" to="/home">
    <MenuItem title="Ciudadanos" to="/home/citizen_registration" />
    <MenuItem title="Estados" to="/home/dashboard-1" />
    <MenuItem title="Municipios" to="/home/dashboard-1" />
  </GroupMenuItem>
)

export default Menu