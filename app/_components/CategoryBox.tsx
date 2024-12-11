import { useRouter, useSearchParams } from "next/navigation"
import queryString from "query-string"
import { useCallback } from "react"
import { IconType } from "react-icons"
import { twMerge } from "tailwind-merge"

interface CategoryBoxProps {
  icon: IconType
  label: string
  selected?: boolean
}

const CategoryBox = ({ icon: Icon, label, selected }: CategoryBoxProps) => {
  const router = useRouter()
  const params = useSearchParams()

  const handleClick = useCallback(() => {
    let currentQuery = {}

    if (params) {
      currentQuery = queryString.parse(params.toString())
    }

    const updateQuery: any = { ...currentQuery, category: label }

    if (params?.get("category") === label) {
      delete updateQuery.category
    }

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: updateQuery,
      },
      { skipNull: true }
    )

    router.push(url)
  }, [label, params, router])

  return (
    <div
      onClick={handleClick}
      className={twMerge(
        "flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer",
        selected ? "border-b-neutral-800" : "border-transparent",
        selected ? "text-neutral-800" : "text-neutral-500"
      )}
    >
      <Icon size={26} />
      <div className='font-medium text-sm'>{label}</div>
    </div>
  )
}

export default CategoryBox
