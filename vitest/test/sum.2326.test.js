
import sum2326 from '../sum2326.js';
import { expect, test } from 'vitest';

test('adds 17 + 52 to equal 69 + offset 0.5668106348209627', () => {
  expect(sum2326(17, 52)).toBe(69 + 0.5668106348209627);
});
