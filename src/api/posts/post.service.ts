import { PostRepository } from './post.repository';
import { Post } from './post.types';

const create = async (data: Omit<Post, 'id'>) => {
    return PostRepository.createPost(data);
};

const createPostByBlog = async (blogId: string, data: Omit<Post, 'id'>) => {
    return PostRepository.createPostByBlog(blogId, data);
};

const getAll = async () => {
    return PostRepository.getAll();
};

const getAllByBlog = async (blogId: string) => {
    return PostRepository.getAllByBlog(blogId);
};

const updateById = async (id: string, data: Post) => {
    return PostRepository.updatePost(id, data);
};

const deleteById = async (id: string) => {
    return PostRepository.deletePost(id);
};

const getById = async (id: string) => {
    return PostRepository.getPost(id);
};

export const PostService = {
    create,
    createPostByBlog,
    getAll,
    getAllByBlog,
    updateById,
    deleteById,
    getById,
};
