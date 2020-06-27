import React from 'react'
import { Route } from 'react-router'
import Dashboard from './dashboard-1/Dashboard'
import HomeMenu from './Menu'
import Citizen from './citizen_registration/Citizen_registration'
import State from './states_registration/States_registration'
import Town from './towns_registration/Town_registration'

export default [
<Route key="citizens" path="/home/citizen_registration" component={Citizen} />,
<Route key="states" path="/home/states_registration" component={State} />,
<Route key="towns" path="/home/towns_registration" component={Town} />
]

export { HomeMenu }
