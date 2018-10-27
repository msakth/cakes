const axiosMock = jest.genMockFromModule('axios');

const mockResponse = {
    data: [
            {"name": "firstCake"},
            {"name": "secondCake"},
        ]    
};

axiosMock.get.mockImplementation(req);

function req() {
    return new Promise((resolve) => {
                resolve(mockResponse);
            });
}

module.exports = axiosMock;