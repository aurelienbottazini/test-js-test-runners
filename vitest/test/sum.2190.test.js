
import sum2190 from '../sum2190.js';
import { expect, test } from 'vitest';

test('adds 99 + 35 to equal 134 + offset 0.8104067343516161', () => {
  expect(sum2190(99, 35)).toBe(134 + 0.8104067343516161);
});
