export interface CreateEquosAvatarRequest {
  identity: string;
  name: string;
  refImage: string;
  client?: string | null;
}

export interface EquosAvatar {
  id: string;
  organizationId: string;
  identity: string;
  name: string;
  client?: string;
  thumbnailUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ListEquosAvatarsResponse {
  skip: number;
  take: number;
  total: number;
  avatars: EquosAvatar[];
}

export interface UpdateEquosAvatarRequest extends CreateEquosAvatarRequest {
  id: string;
  organizationId: string;
}
