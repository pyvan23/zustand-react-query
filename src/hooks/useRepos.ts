import { useQuery } from "@tanstack/react-query";
import { apiGithub } from "../api/github";
import { Repos } from "../types/types";

const fetchRepos = async () => {

    const { data } = await apiGithub.get<Repos[]>("/users/pyvan23/repos");
    return data
};

export const useFetchRepos = () => {
    //repos es el arreglo donde se van a guardar ,y el segundo paramatro se pasa la funcion
    return useQuery(['repos'], fetchRepos)


}