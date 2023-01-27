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

handler.get((req:NextApiRequest, res:NextApiResponse) => {
  const requestOptions:any = {
    headers: {
      accept: "application/json;api-version=7.1-preview.1;excludeUrls=true",
      "accept-language":
        "en-US,en-GB;q=0.9,en;q=0.8,fa-IR;q=0.7,fa;q=0.6,ar;q=0.5,es;q=0.4",
      "cache-control": "no-cache",
      "content-type": "application/json",
      pragma: "no-cache",
      "sec-ch-ua":
        '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
      "x-tfs-session": "f69193b9-61b1-4a3a-a2ff-5b558355ea0b",
      "x-vss-reauthenticationaction": "Suppress",
    },
    referrer:
      "https://marketplace.visualstudio.com/search?term=cop&target=VSCode&category=All%20categories&sortBy=Relevance",
    referrerPolicy: "strict-origin-when-cross-origin",
    method: "POST",
    mode: "cors",
    credentials: "include",
  };

  let {search, page} = req.query
  if(!page) page = "1"
  
  
  requestOptions.body= `{"assetTypes":["Microsoft.VisualStudio.Services.Icons.Default","Microsoft.VisualStudio.Services.Icons.Branding","Microsoft.VisualStudio.Services.Icons.Small"],"filters":[{"criteria":[{"filterType":8,"value":"Microsoft.VisualStudio.Code"},{"filterType":10,"value":"${search}"},{"filterType":12,"value":"37888"}],"direction":2,"pageSize":54,"pageNumber":${page},"sortBy":0,"sortOrder":0,"pagingToken":null}],"flags":870}`

  fetch(
    "https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery",
    requestOptions
  )
  .then(async result => {
    const data = await result.json()
    if(!data.results){
        res.json(Response(false, "Internal Error", 500))
    }
    res.json(Response(true, data.results[0].extensions, 200))
  })
  .catch(e => {
    console.log(e);
    res.send(Response(false, "Internal Error", 500))
  })
});

export default handler;
