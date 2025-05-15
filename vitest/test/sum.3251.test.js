
import sum3251 from '../sum3251.js';
import { expect, test } from 'vitest';

test('adds 75 + 51 to equal 126 + offset 0.8863231723566747', () => {
  expect(sum3251(75, 51)).toBe(126 + 0.8863231723566747);
});
