import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createResidency =asyncHandler(async(req,res)=>{

    const {title,description,price,address,city,country,facilities,image,userEmail} =req.body.data;
    console.log(req.body.data);

    try {
        const residency = await prisma.residency.create({
            data:{
                title,
                description,
                price, 
                address,
                country,
                city,
                facilities, 
                image,
                owner:{connect:{email:userEmail}}
            }
        })

        res.send({message: "Residency created successfully",residency})
        
    } catch (err) {
        if(err.code ==- "P2002"){
            throw new Error("Residency already exists")
        }
        throw new Error(err.message)
    }
})

// Function to get all residencies

export const getAllResidencies = asyncHandler(async(req,res)=>{
    try {
        const residencies = await prisma.residency.findMany({orderBy:{
            createdAt:"desc"
        }})
        res.send(residencies)
    } catch (err) {
        console.log(err.message)
    }
})

// Function to get a specific residency

export const getResidency = asyncHandler(async(req,res)=>{
    const {id} =req.params;

    try {

        const residency = await prisma.residency.findUnique({where:{id}})
        res.send(residency)
    } catch (err) {
        throw new Error(err.message)
    }
})