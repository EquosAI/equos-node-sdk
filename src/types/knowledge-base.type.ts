export interface CreateKnowledgeBaseRequest {
  name: string;
  description: string;
  client?: string;
}

export interface EquosKnowledgeBase {
  id: string;
  organizationId: string;
  name: string;
  description: string;
  client?: string;
  documents: EquosDocument[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateDocumentRequest {
  name: string;
  description: string;
  mimeType: string;
}

export interface CreateDocumentResponse {
  document: EquosDocument;
  uploadUrl: string;
  expireAt: Date;
}

export interface EquosDocument {
  id: string;
  knowledgeBaseId: string;
  name: string;
  description: string;
  size: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ListEquosKnowledgeBasesResponse {
  skip: number;
  take: number;
  total: number;
  items: EquosKnowledgeBase[];
}
