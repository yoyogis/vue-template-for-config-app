var page1 = {
    id: "page1",
    name:"Page 1",
    componentTree:{
        id:1,
        tag:"Card",
        props:[
            {
                name:"dis-hover",
                value:true
            }
        ],
        children:[
            {
                id:2,
                tag:"Button",
                text:"按钮1"
            },
            {
                id:3,
                tag:"p",
                text:"标题",
                slot:'title'
            }
        ]
    }
}
export {page1}