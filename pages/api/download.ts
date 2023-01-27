import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { Response } from "../../modules/response";

const handler = nc({
  onError: (err, req, res: NextApiResponse, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res: NextApiResponse) => {
    res.status(404).end("Page is not found");
  },
});


handler.post((req:NextApiRequest, res:NextApiResponse) => {

    const {extention} = req.body
    if(!extention){
        return res.json(Response(false, "Internal Error", 500))
    }

    console.log(extention);

    try{
        res.send(Response(true, `https://marketplace.visualstudio.com/_apis/public/gallery/publishers/${extention?.publisher.publisherName}/vsextensions/${extention?.extensionName}/${extention?.versions[0]?.version}/vspackage`, 200))
    }
    catch(e){
        res.send(Response(false, "Internal Error", 500))
    }

})

export default handler