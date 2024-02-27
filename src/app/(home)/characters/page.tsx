'use client'

import List from '@/components/sections/home/List/List'
import React from 'react'
import itemsCardsCharacters from './itemsCardsCharacters'
import CardCharacter from '@/components/home/CardCharacter/CardCharacter'
import EmptyCharacterList from '@/components/home/EmptyList/EmptyCharacterList'

const Characters = () => {

  const [search, setSearch] = React.useState('')

  const filter = (campaign: any) => {
    return campaign.name.toLowerCase().includes(search.toLowerCase())
  }

  return (
    <List search={search} setSearch={setSearch} addHref={'/characters/new'} title='Mis personajes'>
      {itemsCardsCharacters.length > 0 ? (
        itemsCardsCharacters.filter(filter).map((object, index) => (
          <CardCharacter
            key={index}
            img={object.img}
            name={object.name}
            level={object.level}
            color={object.color}
            icon={object.icon}
          />
        ))
      ) : (
        <EmptyCharacterList />
      )}
    </List>
  )
}

export default Characters