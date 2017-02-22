# Group Events

Manage events.

## Event feedback [/events/{id}/feedbacks]

+ Parameters
    + id (required, string, `112131`) ... The unique 
    identifier of the event

### Leave feedback [POST]
+ Request Leave feedback for event (application/json)
    {
        "well": "Weather was good",
        "better": "More refreshments", 
        "volunteer": "on"
    }

+ Response 201 (application/json)
    {
        "data": [
            {
                "id":"544454",
                "name": "Paradise Linear",
                "external_id": "kqzvglytpbvb",
                "feedback": [
                    {
                        "attendee": "5644",
                        "answer": {
                            "volunteer": true,
                            "better": "More refreshments",
                            "well": "Weather was good"
                        },
                        "id": "56565"
                    }
                ]
            }
        ]
    }

### Update feedback [PUT]
+ Request Update feedback for event 
    + Headers
        <!-- include(headers/json.md) -->
    + Body
        <!-- include(requests/update-feedback.json) -->
+ Response 200
    + Headers   
        Content-Type: application/json
    + Body
        <!-- include(responses/update-feedback.json) -->