import { API_URL, API_TOKEN } from 'api'
// import * as options from 'options'

export function updateSatus (recordId, params) {
  console.log(params)
  // return api.patch(`${API_ENDPOINT}/${recordId}`, { fields: { 'Status': 'Completed '} })
  return fetch(`${API_URL}/${recordId}`, {
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_TOKEN}`,
    },
    method: 'PATCH',
    body: JSON.stringify({ fields: { Status: params } })
  })
}

export function updateDay (recordId, params) {
  // const statusCopy = status ? options.statusCopy.COMPLETE : options.statusCopy.INCOMPLETE
  // return api.patch(`${API_ENDPOINT}/${recordId}`, { fields: { 'Status': 'Completed '} })
  return fetch(`${API_URL}/${recordId}`, {
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_TOKEN}`,
    },
    method: 'PATCH',
    body: JSON.stringify({ fields: { Notes: params.notes } })
  })
}
