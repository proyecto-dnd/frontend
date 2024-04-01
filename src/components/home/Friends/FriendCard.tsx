import Link from 'next/link';
import styles from './Friends.module.css'
import Delete from '@/components/icons/ui/Delete';
import Person from '@/components/icons/ui/Person';
import PersonAdd from '@/components/icons/ui/PersonAdd';

type FriendCardProps = {
  friend: Friend;
}

const addFriend = async (id: string) => {
  try {
    const res = await fetch(`/api/friends/${id}`, {
      method: 'POST',
    })
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.error(error)
  }

}

const FriendCard = ({ friend }: FriendCardProps) => {
  return (
    <div className={styles.friend}>
      <div className={styles.friendInfo}>
        <img src={friend.avatar} alt={`${friend.displayname}`} />
        <div>
          <h3>{friend.displayname}</h3>
          <p>{friend.username}</p>
        </div>
      </div>
      <div className={styles.buttons}>
        {friend.following ? (
          <>
            <Link href={`/profile/${friend.id}`} className={styles.button}><Person /></Link>
            <button className={`${styles.button} ${styles.delete}`}><Delete /></button>
          </>
        ) : (
          <button onClick={() => addFriend(friend.id)} className={styles.button}><PersonAdd /></button>
        )}
      </div>
    </div>
  )
}

export default FriendCard