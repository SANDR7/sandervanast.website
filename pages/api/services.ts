import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const services = [
        {
            text: 'Development',
            explanation: 'some text'
        },
        {
            text: 'Graphic Design',
            explanation: "I offer graphic designs. That can be logos, illustrations or layouts. I do this besides my main offering, web development. If you choose layout? that means a wireframe with a optional prototype."
        },
        {
            text: 'Technology',
            explanation: "A web app is a  websites that can be download to a desktop and/or smartphones and is in my opinion the future of web development. The website is than almost transform into a native app how you see them in the app store."
        },
        {
            text: 'Nerd Talk ... ( Tech, Keyboards, Cubes ) ',
            explanation: ""
        },
    ]




    res.send({
        services,
        length: services.length
    })
}

export default handler;