import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from '../css/Post.module.css';

export function Post({ author, publishedAt, content }) {
  const [comments, setComents] = useState(['Post legal,hein?!']);

  const [newCommentText, setNewCommentText] = useState('');

  // Editando formato da hora postada
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR
    }
  );

  // Tempo decorrido desde o post
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  // handle publicar novo comentario &
  // resetando value do textarea para ''
  function handleCreateNewComment() {
    event.preventDefault();
    setComents([...comments, newCommentText]);
    setNewCommentText('');
  }

  // handle adicionar comentario novo abaixo
  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  // invalidando click no Publicar com content em branco
  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Este campo é obrigatório');
  }

  // function deletar comentarios
  function deleteComment(commentToDelete) {
    // imutabilidade -> as variaveis nao sofrem mutacao, nos criamos um novo valor (alocamos um novo espaco na memoria)
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    });
    setComents(commentsWithoutDeletedOne);
  }

  // variavel para desabilidar botao com comentario vazio
  const isNewCommentEmpty = newCommentText.length == 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map(line => {
          if (line.type == 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type == 'link') {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          required
          onInvalid={handleNewCommentInvalid}
          name="comment"
          value={newCommentText}
          placeholder="Deixe um commentário"
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
