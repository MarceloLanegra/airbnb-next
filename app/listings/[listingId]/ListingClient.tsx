"use client"

import Container from "@/app/_components/Container"
import ListingHead from "@/app/_components/listings/ListingHead"
import ListingInfo from "@/app/_components/listings/ListingInfo"
import { categories } from "@/app/_components/navbar/Categories"
import { SafeUser } from "@/app/types"
import { Listing, Reservation } from "@prisma/client"
import { useMemo } from "react"

interface ListingClientProps {
  reservations?: Reservation[]
  listing: Listing & {
    user: SafeUser
  }
  currentUser?: SafeUser | null
}

const ListingClient = ({
  reservations,
  listing,
  currentUser,
}: ListingClientProps) => {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category)
  }, [listing.category])

  return (
    <Container>
      <div className='max-w-screen-lg mx-auto'>
        <div className='flex flex-col gap-6'>
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
          <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              guessCount={listing.guestCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.locationValue}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ListingClient
