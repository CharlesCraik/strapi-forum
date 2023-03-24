import {useQuery, gql} from '@apollo/client';
import ThisUser from '../util/user-config';

const GetUser = (userID) => {
    const GET_USER = gql`
        query GET_USER{
            usersPermissionsUser(id: ${userID}){
                data{
                    id
                    attributes{
                        username
                        email
                        liked_posts
                    }
                }
            }
        }
    `;

    const { loading, error, data } = useQuery(GET_USER);
    if (loading) ;;
    if (error) return `Error! ${error.message}`;
    if(data) return(
        data.usersPermissionsUser.data
    );
}

export default GetUser;