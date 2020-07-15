# TODO_server

App is running on http://localhost:4000

Todo list:
    create new todoList:
        POST
        /list

    get todoList:
        GET
        /list/:todoListId

    delete todoList:
        DELETE
        /list/:todoListId

Columns:
    create new column:
        POST
        list/:todoListId/column
        without body
    
    update column data:
        PUT
        list/:todoListId/column
        body example: 
            {
                "_id": "5edfec01c042754b24ff821e",
                "title": "New column 0"
            }

    delete column:
        DELETE
        list/:todoListId/column/:columnId

Cards:
    create new card:
        list/:listId/card
        POST

    delete card:
        list/:listId/card/:cardId
        DELETE


 

Data example:

{
    todoList : {...},
    cardList: {...}
}


"todoList": {
    "id": "afda2a35-e624-4242-949a-33959e09dc29",
    "columns": [
        {
            "id": "8ed80b62-94ed-445f-82d0-7d9b434808e8",
            "title": "New column"
        },
        {
            "id": "ed01c0a2-1b7c-4b56-a221-79f091b360fc",
            "title": "New column 1"
        }
    ]
}

"cardList": {
    "id": "af9796b5-1a72-49df-9617-4a9c4a7733d0",
    "todoListId": "afda2a35-e624-4242-949a-33959e09dc29",
    "cards": [
        {
            "id": "b7017026-a998-4aaf-be88-beb0a9d34cd9",
            "content": "jkjnl",
            "columnId": "8ed80b62-94ed-445f-82d0-7d9b434808e8"
        },
        {
            "id": "43a5a340-d768-4d4a-9403-6dd7f1f8d63b",
            "content": "hxihc\nhkjjnl\nnknkjn\nbkjbkj",
            "columnId": "ed01c0a2-1b7c-4b56-a221-79f091b360fc"
        },
        {
            "id": "dbef3ae7-46cd-4c73-af9d-925d4560a56a",
            "content": "khlj\nhjbklj\nbjnl",
            "columnId": "ed01c0a2-1b7c-4b56-a221-79f091b360fc"
        }
    ]
}