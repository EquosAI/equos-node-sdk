import { HttpUtils } from '../utils/http.utils';
import { ErrorUtils } from '../utils/error.utils';

import {
  CreateDocumentRequest,
  CreateDocumentResponse,
  CreateKnowledgeBaseRequest,
  EquosDocument,
  EquosKnowledgeBase,
  ListEquosKnowledgeBasesResponse,
} from '../types/knowledge-base.type';

export class EquosKnowledgeBaseApi {
  constructor(private readonly http: HttpUtils) {}

  async create(data: CreateKnowledgeBaseRequest): Promise<EquosKnowledgeBase> {
    return this.http
      .post<
        CreateKnowledgeBaseRequest,
        EquosKnowledgeBase
      >('/knowledge-bases', data)
      .catch(ErrorUtils.convertToEquosError);
  }

  async list(
    skip = 0,
    take = 10,
    client?: string,
  ): Promise<ListEquosKnowledgeBasesResponse> {
    let path = `/knowledge-bases?skip=${skip}&take=${take}`;

    if (client) {
      path += `&client=${client}`;
    }

    return this.http
      .get<ListEquosKnowledgeBasesResponse>(path)
      .catch(ErrorUtils.convertToEquosError);
  }

  async get(knowledgeBaseId: string): Promise<EquosKnowledgeBase | null> {
    return this.http
      .get<EquosKnowledgeBase | null>(`/knowledge-bases/${knowledgeBaseId}`)
      .catch(ErrorUtils.convertToEquosError);
  }

  async delete(knowledgeBaseId: string): Promise<EquosKnowledgeBase | null> {
    return this.http
      .delete<EquosKnowledgeBase | null>(`/knowledge-bases/${knowledgeBaseId}`)
      .catch(ErrorUtils.convertToEquosError);
  }

  async createDocument(
    knowledgeBaseId: string,
    data: CreateDocumentRequest,
  ): Promise<CreateDocumentResponse> {
    return this.http
      .post<
        CreateDocumentRequest,
        CreateDocumentResponse
      >(`/knowledge-bases/${knowledgeBaseId}/documents`, data)
      .catch(ErrorUtils.convertToEquosError);
  }

  async indexDocument(
    knowledgeBaseId: string,
    documentId: string,
  ): Promise<EquosDocument> {
    return this.http
      .patch<
        null,
        EquosDocument
      >(`/knowledge-bases/${knowledgeBaseId}/documents/${documentId}/index`, null)
      .catch(ErrorUtils.convertToEquosError);
  }

  async deleteDocument(
    knowledgeBaseId: string,
    documentId: string,
  ): Promise<EquosDocument | null> {
    return this.http
      .delete<EquosDocument | null>(
        `/knowledge-bases/${knowledgeBaseId}/documents/${documentId}`,
      )
      .catch(ErrorUtils.convertToEquosError);
  }
}
