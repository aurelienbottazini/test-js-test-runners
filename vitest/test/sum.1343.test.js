
import sum1343 from '../sum1343.js';
import { expect, test } from 'vitest';

test('adds 78 + 43 to equal 121 + offset 0.6982507829592176', () => {
  expect(sum1343(78, 43)).toBe(121 + 0.6982507829592176);
});
