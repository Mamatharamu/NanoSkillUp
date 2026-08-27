import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient();
async function main(){await prisma.course.createMany({data:[
{slug:"python-test-automation",title:"Python for Test Automation",description:"Python and automation foundations.",duration:"8 Weeks",level:"Beginner to Intermediate",category:"Software Testing"},
{slug:"javascript-playwright",title:"JavaScript with Playwright",description:"Modern browser automation.",duration:"6 Weeks",level:"Intermediate",category:"Test Automation"},
{slug:"ai-powered-testing",title:"AI-Powered Software Testing",description:"Practical AI for quality engineering.",duration:"4 Weeks",level:"Intermediate",category:"AI Testing"}],skipDuplicates:true});}
main().finally(()=>prisma.$disconnect());