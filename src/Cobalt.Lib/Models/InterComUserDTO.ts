export class InterComUserDTO
{
    public RoomInstanceId : string;

    public Id : string;

    public Name : string;

    constructor(roomInstanceId : string, id : string, name : string)
    {
        this.RoomInstanceId = roomInstanceId;
        this.Id = id;
        this.Name = name;
    }
}