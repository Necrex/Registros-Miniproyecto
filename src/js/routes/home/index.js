import React from 'react'
import { Route } from 'react-router'
import HomeMenu from './Menu'
import Citizen from './citizens_main_page/Citizen_main'
import State from './states_main_page/States_main'
import Town from './towns_main_page/Town_main'
import Citizen_Reg from './citizen_register/Citizen_form'

export default [
<Route key="citizens" path="/home/citizen_main" component={Citizen} />,
<Route key="citizens" path="/home/citizen_register" component={Citizen_Reg} />,
<Route key="states" path="/home/states_main" component={State} />,
<Route key="towns" path="/home/towns_main" component={Town} />
]

export { HomeMenu }
