
const isProduction = process.env.NODE_ENV === 'production';
const serverUrl = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:8000';

const client = '';
const makeApiRequest = async (query:string,
    variables = {}) =>{
        try{
            // return await client.request(query, variables)
        }catch(error){
         throw error;
        }
    }

export const getUser = (email : string)=>
{  
    // client.setHeader('Bearer', token);
    // return makeApiRequest(url, {email})
}

export const createUser = (name : string ,email : string, avatarUrl: string)=>
{
      // client.setHeader('Bearer', token);
    const variables = {
        input: {
          name: name,
          email: email,
          avatarUrl: avatarUrl
        },
      };
     // return makeApiRequest(url, {email})
}

export const postForm = (title: string, description : string) => {
  const variables = {
      input: {
        title: title,
        description: description,
    
    
        
      },
    };
  // return makeApiRequest(url, variables)
}






    
    