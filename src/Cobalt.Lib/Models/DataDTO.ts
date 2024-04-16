export class DataDTO
{
    public RoomInstanceId: string;

    public Data: string;

    public OtherUserId: string;

    public OtherUserName: string;

    constructor(roomInstanceId: string, otherUserId: string, otherUserName: string, data: string)
    {
        this.RoomInstanceId = roomInstanceId;
        this.OtherUserId = otherUserId;
        this.OtherUserName = otherUserName;
        this.Data = data;
    }
}