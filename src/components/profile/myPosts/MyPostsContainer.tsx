import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer';
import { StoreContext } from '../../../StoreContext';
import { MyPosts } from './MyPosts';

export const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        const state = store.getState();
        const addPostHandler = () => {
          store.dispatch(addPostCreator());
        }
      
        const onPostChange = (text: string) => {
          store.dispatch(
            updateNewPostTextCreator(text)
          );
        }
        return <MyPosts
          updateNewPostText={onPostChange}
          addPost={addPostHandler}
          posts={state.profilePage.posts}
          newPostText={state.profilePage.newPostText}
          />
      }}
    </StoreContext.Consumer>
  )
}
