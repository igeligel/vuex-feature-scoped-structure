const fetchMessages = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        id: 'message-a7fe282a-bcb3-47a6-b746-e5f41fc2ea66',
        author: 'Robert',
        content: 'This is an awesome architecture',
        time: '2017-10-21T09:46:19+00:00',
        points: 5,
        reactions: [],
      },
      {
        id: 'message-192a2e4d-1203-49b9-bd39-09710e6075e5',
        author: 'Anna',
        content: 'Yeah i agree',
        time: '2017-10-21T09:46:25+00:00',
        points: 0,
        reactions: [],
      },
    ]);
  }, 500);
});

export default {
  fetchMessages,
};
