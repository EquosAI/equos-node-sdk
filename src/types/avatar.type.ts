export interface CreateEquosAvatarData {
  name: string;
  refImage: string;
}

export interface EquosAvatarData {
  id: string;
  name: string;
  thumbnailUrl: string;
  apiKeyId: string;
  organizationId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ListEquosAvatarsData {
  skip: number;
  take: number;
  total: number;
  avatars: EquosAvatarData[];
}
