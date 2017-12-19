let id = 0;

module.exports = {
 testData: {
    users: {
      [id++]: {
        display_name: 'Rebecca',
        password: '12345',
        email: 'haliburtonre@gmail.com',
        achievments: {
          todo_total: 0
        },
        cards: {
          [id++]: {
            order: 0,
            type: 0,
            title: 'Test Card',
            date: Date.now(),
            contents: {
              [id++]: {
                label: 'Test label',
                column: {
                  value: 0
                },
              },
              [id++]: {
                label: 'Test label',
                column: {
                  value: 1
                },
              },
              [id++]: {
                label: 'Test label',
                column: {
                  value: 2
                },
              },
              [id++]: {
                label: 'Test label',
                column: {
                  value: 3
                },
              },
              [id++]: {
                label: 'Test label',
                column: {
                  value: 4
                },
              }
            },
            value_types: {
              [id++]: {
                label: 'Label',
                type: 0
              },
              [id++]: {
                label: 'Label',
                type: 1
              },
              [id++]: {
                label: 'Label',
                type: 2
              },
              [id++]: {
                label: 'Label',
                type: 3
              },
              [id++]: {
                label: 'Label',
                type: 4
              },
            }
          }
        }
      }
    }
  }
}