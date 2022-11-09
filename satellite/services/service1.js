export const getUsers = ({ source, trackingProperties }) => {
    const messageResponse = {
        response: {
            name: 'Karla Pereira',
            website: 'karlapereira.me',
            token: '093edm32cx23809unmx'
        },
        trackingProperties,
    };

    source.postMessage(messageResponse, '*');
};
