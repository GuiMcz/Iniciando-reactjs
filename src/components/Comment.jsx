import { ThumbsUp, Trash } from 'phosphor-react';
import styles from '../css/Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
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

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir<span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
