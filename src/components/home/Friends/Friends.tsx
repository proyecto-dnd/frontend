"use client";

import { useEffect, useState } from "react";
import styles from './Friends.module.css'
import Input from "@/components/common/inputs/Input";
import PersonAdd from "@/components/icons/ui/PersonAdd";
import Link from "next/link";
import Person from "@/components/icons/ui/Person";
import Delete from "@/components/icons/ui/Delete";
import Search from "@/components/icons/ui/Search";
import FriendCard from "./FriendCard";
import Spinner from "@/components/common/Spinner/Spinner";
import { addFriend, removeFriend } from "./actions";

type FriendProps = {
  friends: Friend[];
  cookie: string;
}

const Friends = ({ friends, cookie }: FriendProps) => {
  const [search, setSearch] = useState('')
  const [searchedFriends, setSearchedFriends] = useState<Friend[]>([])
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const [searchLoading, setSearchLoading] = useState(false)

  const filteredFriends = friends.filter(friend => {
    return friend.displayname.toLowerCase().includes(search.toLowerCase()) || friend.username.toLowerCase().includes(search.toLowerCase())
  })

  useEffect(() => {
    if (!search) {
      setSearchLoading(false)
      setSearchedFriends([])
    } else {
      setSearchLoading(true)
    }
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        fetch(`/api/friends?search=${search}`, {
          method: 'GET',
          headers: {
            'Cookie': cookie
          }
        })
          .then(res => res.json())
          .then(data => {
            // filter not following
            setSearchedFriends(data.filter((friend: Friend) => !friend.following))
            setSearchLoading(false)
          })
      }
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [search])

  const handleAddFriend = (id: string) => {
    addFriend(id).then(() => {
      setSearchedFriends(searchedFriends.filter(friend => friend.id !== id))
    })
  }

  const handleRemoveFriend = (id: string) => {
    removeFriend(id)
  }

  return (
    <section className={styles.list}>
      <section className={styles.header}>
        <div className={styles.title}>
          <h2>Amigos</h2>
        </div>
      </section>
      <hr />
      <Input className={styles.search} placeholder="Buscar" value={search} onChange={handleSearch}><Search /></Input>
      <section className={styles.friends}>
        {filteredFriends.map((friend, index) => (
          <FriendCard handleRemoveFriend={handleRemoveFriend} handleAddFriend={handleAddFriend} key={index} friend={friend} />
        ))}
        { search && searchedFriends.length > 0 && (
          searchedFriends.map((friend, index) => (
            <FriendCard handleRemoveFriend={handleRemoveFriend} handleAddFriend={handleAddFriend} key={index} friend={friend} />
          ))
        )}
          <div className={styles.spinnerContainer}>
        { searchLoading ? (
          <Spinner size={'2rem'} />
        ) : (
          search && searchedFriends.length === 0 && (
            <div className={styles.notFound}>
              <p>No se encontraron jugadores...</p>
            </div>
          )
        )}

          </div>
      </section>
    </section>
  )
}

export default Friends