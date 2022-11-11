export interface ColumnProps {
    id: number,     //专栏id
    title: string,      //专栏标题
    avatar?: string,    //专栏图片
    description: string     //专栏描述
}

export interface PostProps {
    id: number,     //专栏里每一项的id
    title: string,      //每一项的标题
    content: string,    //内容
    image?: string,     //图片
    createdAt: string,      //日期
    columnId: number  //对应的的专栏id,对应于ColumnProps中的id
}

export interface PostDetail {
    id: number,
    title: string,
    content: string,
    postId: number,
    createdAt: string,
    image?: string 
}



export const testData: ColumnProps[] = [
    {
        id: 1,
        title: 'test1的专栏',
        description: '这是的test1专栏,有一段非常有意思的简介,可以更新一下欧, 这是的test1专栏,有一段非常有意思的简介,可以更新一下欧',
        avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_150,w_150'
    },
    {
        id: 2,
        title: 'test2的专栏',
        description: '这是的test2专栏,有一段非常有意思的简介,可以更新一下欧',
        avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
    },
    {
        id: 3,
        title: 'test3的专栏',
        description: '这是的test3专栏,有一段非常有意思的简介,可以更新一下欧 这是的test1专栏,有一段非常有意思的简介,可以更新一下欧'
        // avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
    },
    {
        id: 4,
        title: 'test4的专栏',
        description: '这是的test4专栏,有一段非常有意思的简介,可以更新一下欧',
        avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
    },
    {
        id: 5,
        title: 'test5的专栏',
        description: '这是的test5专栏,有一段非常有意思的简介,可以更新一下欧',
        avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
    },
    {
        id: 6,
        title: 'test6的专栏',
        description: '这是的test6专栏,有一段非常有意思的简介,可以更新一下欧',
        // avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
    },
    {
        id: 7,
        title: 'test7的专栏',
        description: '这是的test7专栏,有一段非常有意思的简介,可以更新一下欧',
        avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
    },
    {
        id: 8,
        title: 'test8的专栏',
        description: '这是的test8专栏,有一段非常有意思的简介,可以更新一下欧',
        // avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
    }
]

export const testPosts: PostProps[] = [
    {
        id: 1,
        title: '这是我的第一篇文章',
        content: 'this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif...',
        image: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee1980819f4ae08ac78d458.png?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110',
        createdAt: '2020-06-11 10:34:22',
        columnId: 1
    },
    {
        id: 2,
        title: '这是我的第二篇文章',
        content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
        createdAt: '2020-06-11 10:34:22',
        columnId: 1
    },
    {
        id: 3,
        title: '这是我的第三篇文章',
        content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
        image: 'https://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5edcc2329f2b4e28352b75eb.jpg?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110',
        createdAt: '2020-06-11 10:34:22',
        columnId: 1
    },
    {
        id: 4,
        title: '这是我的第四篇文章',
        content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
        image: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee1980819f4ae08ac78d458.png?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110',
        createdAt: '2020-06-11 10:34:22',
        columnId: 2
    },
    {
        id: 5,
        title: '这是我的第五篇文章',
        content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
        createdAt: '2020-06-11 10:34:22',
        columnId: 3
    },
    {
        id: 6,
        title: '这是我的第六篇文章',
        content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
        image: 'https://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5edcc2329f2b4e28352b75eb.jpg?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110',
        createdAt: '2020-06-11 10:34:22',
        columnId: 3
    },
    {
        id: 7,
        title: '这是我的第四篇文章',
        content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
        image: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee1980819f4ae08ac78d458.png?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110',
        createdAt: '2020-06-11 10:34:22',
        columnId: 4
    },
    {
        id: 8,
        title: '这是我的第五篇文章',
        content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
        createdAt: '2020-06-11 10:34:22',
        columnId: 4
    },
    {
        id: 9,
        title: '这是我的第六篇文章',
        content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
        image: 'https://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5edcc2329f2b4e28352b75eb.jpg?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110',
        createdAt: '2020-06-11 10:34:22',
        columnId: 5
    }
]

export const PostDetailData: PostDetail[] = [
    {
        id: 1,
        title: '这是我的第一篇文章',
        content: 'this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif...',
        postId: 1,
        createdAt: new Date().toLocaleDateString(),
        image: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee1980819f4ae08ac78d458.png?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110'
    },
    {
        id: 2,
        title: '这是我的第二篇文章',
        content: 'this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif...',
        postId: 1,
        createdAt: new Date().toLocaleDateString(),
        image: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee1980819f4ae08ac78d458.png?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110'
    },
    {
        id: 3,
        title: '这是我的第三篇文章',
        content: 'this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif...',
        postId: 1,
        createdAt: new Date().toLocaleDateString(),
        image: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee1980819f4ae08ac78d458.png?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110'
    },
    {
        id: 1,
        title: '这是我的第四篇文章',
        content: 'this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif...',
        postId: 2,
        createdAt: new Date().toLocaleDateString(),
        image: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee1980819f4ae08ac78d458.png?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110'
    },
    {
        id: 4,
        title: '这是我的第五篇文章',
        content: 'this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif...',
        postId: 3,
        createdAt: new Date().toLocaleDateString(),
        image: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee1980819f4ae08ac78d458.png?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110'
    },
    {
        id: 5,
        title: '这是我的第六篇文章',
        content: 'this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif...',
        postId: 3,
        createdAt: new Date().toLocaleDateString(),
        image: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee1980819f4ae08ac78d458.png?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110'
    },
    {
        id: 6,
        title: '这是我的第七篇文章',
        content: 'this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif...',
        postId: 4,
        createdAt: new Date().toLocaleDateString(),
        image: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee1980819f4ae08ac78d458.png?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110'
    },
    {
        id: 7,
        title: '这是我的第八篇文章',
        content: 'this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif...',
        postId: 4,
        createdAt: new Date().toLocaleDateString(),
        image: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee1980819f4ae08ac78d458.png?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110'
    },
    {
        id: 8,
        title: '这是我的第九篇文章',
        content: 'this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif...',
        postId: 5,
        createdAt: new Date().toLocaleDateString(),
        image: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee1980819f4ae08ac78d458.png?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110'
    }
]