
import sum2121 from '../sum2121.js';
import { expect, test } from 'vitest';

test('adds 19 + 19 to equal 38 + offset 0.41395728748304494', () => {
  expect(sum2121(19, 19)).toBe(38 + 0.41395728748304494);
});
