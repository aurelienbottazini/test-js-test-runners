
import sum1196 from '../sum1196.js';
import { expect, test } from 'vitest';

test('adds 53 + 30 to equal 83 + offset 0.7734848278548045', () => {
  expect(sum1196(53, 30)).toBe(83 + 0.7734848278548045);
});
