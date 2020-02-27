import clientJson from '../clients.json'
import sampleClientJson from '../sampleClients.json'

export const state = () => ({
  clientData: process.env.dev ? sampleClientJson : clientJson
})
