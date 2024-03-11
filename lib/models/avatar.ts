import mongoose, { Schema } from "mongoose";

export enum EXT {
    Jpg = ".jpg",
    Webp = ".webp",
}
export enum MIME {
    ImageJPEG = "image/jpeg",
    ImageWebp = "image/webp",
}

export enum Provider {
    Local = "local",
}
export interface IAvatar extends Document {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: IAvatarFormats;
    hash: string;
    ext: EXT;
    mime: MIME;
    size: number;
    url: string;
    previewUrl: string;
    provider: Provider;
    provider_metadata: string;
    created_at: Date;
    updated_at: Date;
  }
  
  export interface IAvatarFormats extends Document {
    thumbnail: IThumbnail;
  }
  
  export interface IThumbnail extends Document {
    name: string;
    hash: string;
    ext: EXT;
    mime: MIME;
    width: number;
    height: number;
    size: number;
    path: string;
    url: string;
  }


export const ThumbnailSchema: Schema<IThumbnail> = new Schema({
    name: { type: String, required: true },
    hash: { type: String, required: true },
    ext: { type: String, enum: Object.values(EXT), required: true },
    mime: { type: String, enum: Object.values(MIME), required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    size: { type: Number, required: true },
    path: { type: String },
    url: { type: String, required: true },
  });
  

// Create mongoose schemas
export const AvatarFormatsSchema: Schema<IAvatarFormats> = new Schema({
    thumbnail: { type: ThumbnailSchema, required: true },
  });
  

export const AvatarSchema: Schema<IAvatar> = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    alternativeText: { type: String, required: true },
    caption: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    formats: { type: AvatarFormatsSchema, required: true },
    hash: { type: String, required: true },
    ext: { type: String, enum: Object.values(EXT), required: true },
    mime: { type: String, enum: Object.values(MIME), required: true },
    size: { type: Number, required: true },
    url: { type: String, required: true },
    previewUrl: { type: String },
    provider: { type: String, enum: Object.values(Provider), required: true },
    provider_metadata: { type: String },
    created_at: {
      type: Date,
      default: Date.now // Set default value to current date and time
    },
    updated_at: {
      type: Date,
      default: Date.now // Set default value to current date and time
    },
  });

  export const AvatarModel = mongoose.model<IAvatar>('Avatar', AvatarSchema);
