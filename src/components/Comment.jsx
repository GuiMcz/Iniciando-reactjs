import { ThumbsUp, Trash } from 'phosphor-react';
import styles from '../css/Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {
  // estado para armazenar likes
  const [likeCount, setLikeCount] = useState(0);

  // contador de likes
  function handleLikeComment() {
    setLikeCount(state => {
      return state + 1;
    });
  }
  // comunicacao com o post para ter acesso a funcao deleteComment()
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar withoutBorder src="https://github.com/GuiMcz.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gui Vasconcellos</strong>
              <time
                title="18 de Março às 14:47h"
                dateTime="2024-03-18 14:47:21"
              >
                Cerca de 2h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir<span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
