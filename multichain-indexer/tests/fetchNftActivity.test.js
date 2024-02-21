const { fetchNftActivity } = require('../src/functions');
const { request } = require('graphql-request');
const fs = require('fs');
jest.mock('graphql-request', () => ({
  request: jest.fn(),
}));
jest.mock('fs');

describe('fetchNftActivity', () => {
  const mockQuery = 'query getNftActivity { ... }'; // Simplified GraphQL query
  const mockFilePath = '../queries/getTransactions.graphql';
  fs.readFileSync.mockReturnValue(mockQuery);

  const mockSuccessfulResponse = (data) => {
    request.mockResolvedValueOnce(data);
  };

  const mockFailedResponse = (error) => {
    request.mockRejectedValueOnce(error);
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return NFT activity successfully when the request succeeds', async () => {
    const mockData = { transactions: [] }; // Adjust this to match your expected GraphQL response structure
    mockSuccessfulResponse(mockData);

    const host = 'http://localhost:4350';
    const nftId = '0x5173-076350-38733';

    const result = await fetchNftActivity(host, nftId);

    expect(result).toEqual(mockData);
    expect(request).toHaveBeenCalledTimes(1);
    expect(request).toHaveBeenCalledWith(`${host}/graphql`, mockQuery, {
      nftId,
    });
    expect(fs.readFileSync).toHaveBeenCalledWith(expect.stringContaining(mockFilePath), 'utf8');
  });

  it('should handle errors when the request fails', async () => {
    const mockError = new Error('Network error');
    mockFailedResponse(mockError);

    const host = 'http://localhost:4350';
    const nftId = '0x5173-076350-38733';

    await expect(fetchNftActivity(host, nftId)).rejects.toThrow(mockError);
    expect(request).toHaveBeenCalledTimes(1);
    expect(fs.readFileSync).toHaveBeenCalledWith(expect.stringContaining(mockFilePath), 'utf8');
  });
});


