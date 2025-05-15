
import sum2769 from '../sum2769.js';
import { expect, test } from 'vitest';

test('adds 4 + 83 to equal 87 + offset 0.8961746960720852', () => {
  expect(sum2769(4, 83)).toBe(87 + 0.8961746960720852);
});
