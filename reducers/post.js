export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'jblee',
        },
        content: '첫 번째 게시글 #해시태그 #커피',
        Images: [{
            src: 'https://namu.wiki/w/%EC%BB%A4%ED%94%BC',
        }, {
            src: 'https://ko.wikipedia.org/wiki/%EC%BB%A4%ED%94%BC',
        }],
        Comments: [{
            User: {
                nickname: 'mim'
            },
            content: '1111'
        }, {
            User: {
                nickname: 'beans'
        },
            content: '2222'
        }]
    }],
    imagePaths: [],
    postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    User: {
        id: 2,
        nickname: '카린'
    },
    Images: [],
    Comments: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true
            };
        default:
            return state;
    }

}

export default reducer;