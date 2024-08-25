'use client'
import { useOrganization } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'

interface Props {
  userId: string
}

function PostThread({ userId }: { userId: string }) {
  const router = useRouter()
  const pathname = usePathname()

  const { organization } = useOrganization()

  // const form = useForm<z.infer<typeof ThreadVa
  // const onSubmit = async (values: z.infer)

  return <h1>Post Thread Form</h1>
}

export default PostThread
