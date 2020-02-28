import clientJson from '../clients.json'
import sampleClientJson from '../sampleClients.json'

export const state = () => ({
  caseStudyPassword: process.env.caseStudyPassword,
  clientData: process.env.dev ? sampleClientJson : clientJson
})
