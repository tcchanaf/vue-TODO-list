export default [
    {
        url: "/api/todoDocs",
        method: "get",
        response: (request) => {
            var todoDocs = [
                {
                    id: '1',
                    title: 'minions',
                    date: Date.parse('13 June 2023 15:12:00 GMT'),
                    description: 'it is all about bananas',
                    tooltip: 'This is the tooltip for Item 1',
                    isDone: false,
                },
                {
                    id: '2',
                    title: 'minions',
                    date: Date.parse('04 May 2023 00:12:00 GMT'),
                    description: 'it is all about bananas',
                    tooltip: 'This is the tooltip for Item 2',
                    isDone: false,
                },
                {
                    id: '3',
                    title: 'minions',
                    date: Date.parse('04 May 2023 00:12:00 GMT'),
                    description: 'it is all about bananas',
                    tooltip: 'This is the tooltip for Item 3',
                    isDone: false,
                },
                {
                    id: '4',
                    title: 'minions',
                    date: Date.parse('04 May 2023 00:12:00 GMT'),
                    description: '',
                    tooltip: 'This is the tooltip for Item 4',
                    isDone: false,
                },
                {
                    id: '5',
                    title: 'Finish',
                    date: new Date().getTime(),
                    description: 'You have finished it!!!',
                    tooltip: 'This is the tooltip for Item 5',
                    isDone: true,
                },
            ]

            var filteredTodoDocs = todoDocs.filter(function(todoDoc) {
                return todoDoc.isDone.toString() === request.query['isDone'];
            });
            
            if (!request.query['fromDeadline'] || !request.query['toDeadline']) {
                   return filteredTodoDocs
            }

            var fromDeadline = parseInt(request.query['fromDeadline'])
            var toDeadline = parseInt(request.query['toDeadline'])
            filteredTodoDocs = filteredTodoDocs.filter(function(todoDoc) {
                return fromDeadline <= todoDoc.date 
                    && todoDoc.date <= toDeadline 
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
