
import sum1323 from '../sum1323.js';
import { expect, test } from 'vitest';

test('adds 97 + 8 to equal 105 + offset 0.23984370509526343', () => {
  expect(sum1323(97, 8)).toBe(105 + 0.23984370509526343);
});
