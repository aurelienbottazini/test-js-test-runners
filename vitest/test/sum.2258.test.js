
import sum2258 from '../sum2258.js';
import { expect, test } from 'vitest';

test('adds 9 + 60 to equal 69 + offset 0.6699227282973227', () => {
  expect(sum2258(9, 60)).toBe(69 + 0.6699227282973227);
});
