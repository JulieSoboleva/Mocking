import fetchData from './http';

export default function getLevel(userId) {
    const response = fetchData(`https://server:8080/user/${userId}`);

    if (response.status === 200) {
        return `Ваш текущий уровень: ${response.level}`;
    }

    return 'Информация об уровне временно недоступна';
}