
import sum2514 from '../sum2514.js';
import { expect, test } from 'vitest';

test('adds 29 + 93 to equal 122 + offset 0.3011549606571363', () => {
  expect(sum2514(29, 93)).toBe(122 + 0.3011549606571363);
});
