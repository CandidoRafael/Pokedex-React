import { Skeleton } from "@mui/material";

export const Loading = () => {
    return (
        <>
           <Skeleton 
        variant="rounded" 
        width="100%" 
        height={60} 
        style={{marginBottom:"20px"}}
        />
        <Skeleton 
        variant="rounded" 
        width="100%"
        height={300} 
        />
        <Skeleton 
        variant="rounded" 
        width="100%" 
        height={60} 
        />
        <Skeleton 
        variant="rounded" 
        width="100%" 
        height={360} 
        />
        </>
     
    );
};