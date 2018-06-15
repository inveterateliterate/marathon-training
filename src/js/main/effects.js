import { API_URL, API_TOKEN } from 'api'
// import * as options from 'options'

export function updateSatus (recordId, tableName, params) {
  // return api.patch(`${API_ENDPOINT}/${recordId}`, { fields: { 'Status': 'Completed '} })
  return fetch(`${API_URL}/${tableName}/${recordId}`, {
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_TOKEN}`,
    },
    method: 'PATCH',
    body: JSON.stringify({ fields: { status: params } })
  }).then(response => response.json())
}

export function updateDay (recordId, tableName, params) {
  // const statusCopy = status ? options.statusCopy.COMPLETE : options.statusCopy.INCOMPLETE
  // return api.patch(`${API_ENDPOINT}/${recordId}`, { fields: { 'Status': 'Completed '} })
  return fetch(`${API_URL}/${tableName}/${recordId}`, {
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_TOKEN}`,
    },
    method: 'PATCH',
    body: JSON.stringify({ fields: { notes: params.notes } })
  })
}
