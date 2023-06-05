export default [
    {
        url: "/api/getUsers",
        method: "get",
        response: () => {
            var list = [{
                "url": "http://127.0.0.1:8000/users/3.json",
                "username": "aaaaaa",
                "email": "",
                "groups": []
            }, {
                "url": "http://127.0.0.1:8000/users/2.json",
                "username": "somenzz",
                "email": "",
                "groups": []
            }, {
                "url": "http://127.0.0.1:8000/users/1.json",
                "username": "admin",
                "email": "admin@example.com",
                "groups": []
            }]
            return list
        }
    },
    {
        url: "/api/getUsers",
        method: "post",
        response: () => {
            var list = [{
                "url": "http://127.0.0.1:8000/users/3.json",
                "username": "aaaaaa",
                "email": "",
                "groups": []
            }, {
                "url": "http://127.0.0.1:8000/users/2.json",
                "username": "somenzz",
                "email": "",
                "groups": []
            }, {
                "url": "http://127.0.0.1:8000/users/1.json",
                "username": "admin",
                "email": "admin@example.com",
                "groups": []
            }]
            return list
        }
    },
]