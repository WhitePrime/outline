// @flow
import { Comment } from "../models";

export default function present(comment: Comment) {
  return {
    id: comment.id,
    text: comment.text,
    documentId: comment.documentId,
    parentCommentId: comment.parentCommentId,
    createdById: comment.createdById,
  };
}
