import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'
import { OnTheAirTypes } from '../Redux/OnTheAirRedux';
import { InTheatresTypes } from '../Redux/InTheatresRedux';

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getUserAvatar } from './GithubSagas'
import { getOnTheAir } from './OnTheAirSagas';
import { getInTheatres } from './InTheatresSagas';

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),
    takeLatest(OnTheAirTypes.ON_THE_AIR_REQUEST, getOnTheAir, api),
    takeLatest(InTheatresTypes.IN_THEATRES_REQUEST, getInTheatres, api)
  ])
}
