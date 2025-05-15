
import sum3749 from '../sum3749.js';
import { expect, test } from 'vitest';

test('adds 67 + 79 to equal 146 + offset 0.9493412463292464', () => {
  expect(sum3749(67, 79)).toBe(146 + 0.9493412463292464);
});
