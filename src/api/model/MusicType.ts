import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('MusicType')
export class MusicType {
  @JsonProperty('songs', Object)
  private songs: {
    name: string;
    artists: [{ name: string }];
    album: { picUrl: string };
    id: number;
  }[] = [];

  public get artists(): string[] {
    return this.songs[0].artists.map((item) => item.name);
  }
  public get name(): string {
    return this.songs[0].name;
  }

  public get avatar(): string {
    return this.songs[0].album.picUrl;
  }

  public get url(): string {
    return `https://music.163.com/song/media/outer/url?id=${this.songs[0].id}.mp3`;
  }
}
