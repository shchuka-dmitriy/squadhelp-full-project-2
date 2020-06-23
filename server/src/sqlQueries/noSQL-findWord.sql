db.messages.aggregate(
    [
        {
            $match: {
                body: {
                    $regex: /([П,п])+(аровоз)/,
                    $options: 'i'
                }
            }
        },
        {
            $group: {
                _id: null,
                count: {
                    $sum: 1
                }
            }
        }
    ]
)