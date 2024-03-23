import getLevel from '../levels';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
    jest.resetAllMocks();
});

test('should call fetchData once', () => {
    fetchData.mockReturnValue(JSON.stringify({}));
    const response = getLevel(1);
    expect(response).toEqual(`Информация об уровне временно недоступна`);
    expect(fetchData).toHaveBeenCalledWith('https://server:8080/user/1');
});
