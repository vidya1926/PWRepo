import test from '@playwright/test'
import { createLead, generateToken, getLead } from './apiUtility'

test(`Using utility function`,async({page})=>{
    await generateToken();
    await createLead(page.request,"Sanjay","Qeagle") 
    await getLead(page.request)
})