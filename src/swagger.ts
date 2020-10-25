export default {
  swagger: '2.0',
  info: {
    title: 'Hangman Game API',
    description: 'API for Managing Hangman Game',
    version: '2.0.0',
  },
  produces: ['application/json'],
  host: 'localhost:5001/api',
  basePath: '/',
  tags: [
    {
      name: 'game',
      description: 'One step of control the hangman game',
    },
  ],
  paths: {
    '/checkletter': {
      post: {
        tags: ['game'],
        'x-swagger-router-controller': 'checkletter',
        operationId: 'POST',
        description: 'Check if the letter sended is on the word',
        parameters: [
          {
            name: 'body',
            in: 'body',
            description: 'The id of the game and the letter',
            required: true,
            schema: {
              $ref: '#/definitions/CheckLetterSchema',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Returns index of letter in the word',
          },
          default: {
            description: 'Unexpected error',
            schema: {
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      // get: {
      //   tags: ['tools'],
      //   'x-swagger-router-controller': 'tool',
      //   operationId: 'GET',
      //   description: 'Returns a list of tools',
      //   responses: {
      //     '200': {
      //       description: 'Tool list',
      //       schema: {
      //         $ref: '#/definitions/Tool',
      //       },
      //     },
      //     default: {
      //       description: 'Unexpected error',
      //       schema: {
      //         $ref: '#/definitions/Error',
      //       },
      //     },
      //   },
      // },
    },
    // '/tools?tag={tagName}': {
    //   get: {
    //     tags: ['tools'],
    //     'x-swagger-router-controller': 'toolByTag',
    //     operationId: 'toolByTag',
    //     description: 'Fetch a tool',
    //     parameters: [
    //       {
    //         name: 'tagName',
    //         in: 'path',
    //         description: 'The tools to fetch by tag name',
    //         required: false,
    //         type: 'string',
    //       },
    //     ],
    //     responses: {
    //       '200': {
    //         description: 'Tool details',
    //         schema: {
    //           $ref: '#/definitions/Tool',
    //         },
    //       },
    //       default: {
    //         description: 'Unexpected error',
    //         schema: {
    //           $ref: '#/definitions/Error',
    //         },
    //       },
    //     },
    //   },
    // },
    // '/tools/{id}': {
    //   delete: {
    //     tags: ['tools'],
    //     'x-swagger-router-controller': 'toolDelete',
    //     operationId: 'toolDelete',
    //     description: 'Fetch a tool',
    //     parameters: [
    //       {
    //         name: 'id',
    //         in: 'path',
    //         description: 'The tool to be deleted',
    //         required: true,
    //         type: 'string',
    //       },
    //     ],
    //     responses: {
    //       '200': {
    //         description: 'Tool deleted',
    //       },
    //       default: {
    //         description: 'Unexpected error',
    //         schema: {
    //           $ref: '#/definitions/Error',
    //         },
    //       },
    //     },
    //   },
    // },
  },
  definitions: {
    Error: {
      required: ['code', 'message'],
      properties: {
        code: {
          type: 'integer',
          format: 'int32',
        },
        message: {
          type: 'string',
        },
      },
    },
    Success: {
      required: ['code', 'message'],
      properties: {
        code: {
          type: 'integer',
          format: 'int32',
        },
        message: {
          type: 'string',
        },
      },
    },
    CheckLetterSchema: {
      required: ['id', 'letter'],
      properties: {
        id: {
          type: 'string',
        },
        letter: {
          type: 'string',
        },
      },
    },
  },
};
