export default [
    {
        url: "/api/todoDocs",
        method: "get",
        response: () => {
            var todoDocs = [
                {
                    id: '1',
                    cover: 'https://tigernewspaper.com/wp-content/uploads/2015/07/minions.jpg',
                    title: 'minions',
                    author: 'bob',
                    date: '2023-05-01',
                    press: 'Illumination',
                    price: 5.99,
                    description: 'it is all about bananas',
                    tooltip: 'This is the tooltip for Item 1',
                },
                {
                    id: '2',
                    cover: 'https://tigernewspaper.com/wp-content/uploads/2015/07/minions.jpg',
                    title: 'minions',
                    author: 'bob',
                    date: '2023-05-01',
                    press: 'Illumination',
                    price: 19.99,
                    description: 'it is all about bananas',
                    tooltip: 'This is the tooltip for Item 1',
                },
            ]

            return todoDocs
        }
    },


    {
        url: "/api/saveDoc",
        method: "post",
        response: (request) => {
            return {'code': 'success'}
        }
    },
]