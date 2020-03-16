'use strict';

const config = require('../index');

describe('Config file', () => {
  test('Config file is a json file', () => {
    expect(config).toHaveProperty('severity');
    expect(config).toHaveProperty('plugins');
    expect(config).toHaveProperty('rules');
  });
});
