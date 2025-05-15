
import sum2433 from '../sum2433.js';
import { expect, test } from 'vitest';

test('adds 66 + 25 to equal 91 + offset 0.8298441464072409', () => {
  expect(sum2433(66, 25)).toBe(91 + 0.8298441464072409);
});
