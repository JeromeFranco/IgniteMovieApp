/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import DetailActions from '../Redux/DetailRedux'
import transform from '../Transforms/DetailTransform';


export function * getDetail (api, action) {
  const { type, id } = action.data

  const detailResponse = yield call(api.getDetail, type, id)
  const crewResponse = yield call(api.getCrew, id)

  try {
    yield put(DetailActions.detailSuccess(transform(detailResponse.data, crewResponse.data)))
  } catch (error) {
    yield put(DetailActions.detailFailure())
  }
}
