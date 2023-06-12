export default [
    {
        url: "/api/todoDocs",
        method: "get",
        response: (request) => {
            var todoDocs = [
                {
                    id: '1',
                    title: 'minions',
                    date: Date.parse('05 May 2023 16:12:00 GMT'),
                    description: 'it is all about bananas',
                    tooltip: 'This is the tooltip for Item 1',
                },
                {
                    id: '2',
                    title: 'minions',
                    date: Date.parse('04 May 2023 00:12:00 GMT'),
                    description: 'it is all about bananas',
                    tooltip: 'This is the tooltip for Item 1',
                },
                {
                    id: '3',
                    title: 'minions',
                    date: Date.parse('04 May 2023 00:12:00 GMT'),
                    description: 'it is all about bananas',
                    tooltip: 'This is the tooltip for Item 1',
                },
                {
                    id: '4',
                    title: 'minions',
                    date: Date.parse('04 May 2023 00:12:00 GMT'),
                    description: '',
                    tooltip: 'This is the tooltip for Item 1',
                },
            ]

            if (!request.query['fromDeadline'] || !request.query['toDeadline']) {
                console.log("request.query['toDeadline']: " +  request.query['toDeadline'])
                console.log("request.query['fromDeadline']: " +  request.query['fromDeadline'])
                return todoDocs
            }

            var fromDeadline = parseInt(request.query['fromDeadline'])
            var toDeadline = parseInt(request.query['toDeadline'])
            var filteredTodoDocs = todoDocs.filter(function(todoDoc) {
                return fromDeadline <= todoDoc.date && todoDoc.date <= toDeadline ;
            });

            return filteredTodoDocs
        }
    },


    {
        url: "/api/saveDoc",
        method: "post",
        response: (request) => {
            console.log(request)
            return {'code': 'success'}
        }
    },
]
