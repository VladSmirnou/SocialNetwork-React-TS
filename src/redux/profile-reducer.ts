const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
   posts: [
     {id: 1, message: 'first', likesCount: 12},
     {id: 2, message: 'second', likesCount: 11},
   ],
   newPostText: ''
}

type PostType = {
    id: number,
    message: string,
    likesCount: number
}

export type PostsType = Array<PostType>;

type ProfilerReducerStateType = {
    posts: PostsType
    newPostText: string
}

const profileReducer = (state: ProfilerReducerStateType = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 5, message: state.newPostText, likesCount: 0
              }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
            return state;
        }
        default:
            return state;
    }
}

export const addPostCreator = () => ({
    type: ADD_POST
})

export const updateNewPostTextCreator = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer;