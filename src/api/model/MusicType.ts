import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('album')
export class Album {
  @JsonProperty('picUrl', String)
  public picUrl: string = '';
}

@JsonObject('artist')
export class Artist {
  @JsonProperty('name', String)
  public name: string = '';
}
@JsonObject('player')
export class Player {
  @JsonProperty('name', String)
  public name: string = '';

  @JsonProperty('id', Number)
  public id: string = '';

  @JsonProperty('artists', [Artist], true)
  public artists: Artist[] = [];

  @JsonProperty('album', Album)
  private _album: Album = new Album();

  public get picUrl(): string {
    return this._album.picUrl;
  }

  public set picUrl(value: string) {
    this._album.picUrl = value;
  }

  @JsonProperty('duration', Number)
  public duration: number = 0;

  public get url(): string {
    return `https://music.163.com/song/media/outer/url?id=${this.id}.mp3`;
  }
}
