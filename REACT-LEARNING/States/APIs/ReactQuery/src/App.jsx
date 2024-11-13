import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// Generate data you want to populate on the client side or import store and thunk from state management
const POSTS = [
  { id: 1, title:"Post 1" },
  { id: 2, title:"Post 2" }
]

// /posts -> ["posts"]
// /posts/1 -> ["posts", 1]
// /posts?authorId=1 -> ["posts", {authorId: 1}]
// posts/2/comments -> ["posts", post.id, "comments"]

function App() {
  // Invalidate the queries 
  const queryClient = useQueryClient()

  // Query
  const postsQuery = useQuery({
    queryKey: ['posts'], // Provide a unique identifier
    queryFn: ({queryKey}) => wait(500).then(() => {
      console.log(obj)
       return [...POSTS]
    }) // Generate a function to populate your data
  })

  // Mutation
  // const newPostMutation = useMutation({
  //   mutationFn: title => {
  //     return wait(1000).then(() =>
  //       POSTS.push({ id: crypto.randomUUID(), title })
  //     )
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["posts"])
  //   }
  // })

  // Error Handling and display of status
  if (postsQuery.isLoading) {
    return <h1>Loading...</h1>
  }
  if (postsQuery.isError) {
    return <pre>{JSON.stringify(postsQuery.error)}</pre>
  }


  return (
    <div>
      // Display data in return function
      <h1>{postsQuery.data.map(post => (
        <div key={post
          .id}>
          {post.title}
        </div>
      ))}
      </h1>
      {/* <button
        disabled={newPostMutation.isLoading}
        onClick={() => newPostMutation.mutate("New Post")}
      >
        Add New  
      </button> */}
    </div>
  )
}


function wait(duration) {
  return new Promise (resolve => setTimeout(resolve, duration))
}

export default App
