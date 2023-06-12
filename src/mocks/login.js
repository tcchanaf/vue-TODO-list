export default [
    {
        url: "/api/login",
        method: "post",
        response: (request) => {
            console.log(request)
            return {'code': 200}
        }
    },
]