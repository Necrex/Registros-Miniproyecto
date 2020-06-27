import React from 'react'
import { Route } from 'react-router'
import Dashboard from './dashboard-1/Dashboard'
import HomeMenu from './Menu'
import Citizen from './citizen_registration/Citizen_registration'

export default <Route path="/home/citizen_registration" component={Citizen} />
export { HomeMenu }
