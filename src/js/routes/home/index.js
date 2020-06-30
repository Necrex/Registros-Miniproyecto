import React from 'react'
import { Route } from 'react-router'
import HomeMenu from './Menu'
import Citizen from './citizens_main_page/Citizen_main'
import State from './states_main_page/States_main'
import Town from './towns_main_page/Town_main'
import Citizen_Reg from './citizen_register/Citizen_form'
import Citizen_Reg_ed from './citizen_register/Citizen_form'
import State_Reg from './state_register/State_regis_page'
import State_Reg_ed from './state_register/State_regis_page'
import Town_Reg from './town_register/Town_regis_page'
import Town_Reg_ed from './town_register/Town_regis_page'


export default [
<Route key="citizens" path="/home/citizen_main" component={Citizen} />,
<Route key="citizen_r" path="/home/citizen_register" component={Citizen_Reg} />,
<Route key="citizen_r" path="/home/citizen_edit/:idEdit" component={Citizen_Reg_ed} />,
<Route key="states" path="/home/states_main" component={State} />,
<Route key="states_r" path="/home/state_register" component={State_Reg} />,
<Route key="states_e" path="/home/state_edit/:idEdit" component={State_Reg_ed} />,
<Route key="towns" path="/home/towns_main" component={Town} />,
<Route key="towns_r" path="/home/town_register" component={Town_Reg} />,
<Route key="towns_e" path="/home/town_edit/:idEdit" component={Town_Reg_ed} />
]

export { HomeMenu }
