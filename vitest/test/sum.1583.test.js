
import sum1583 from '../sum1583.js';
import { expect, test } from 'vitest';

test('adds 97 + 87 to equal 184 + offset 0.277404115366641', () => {
  expect(sum1583(97, 87)).toBe(184 + 0.277404115366641);
});
