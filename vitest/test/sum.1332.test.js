
import sum1332 from '../sum1332.js';
import { expect, test } from 'vitest';

test('adds 85 + 8 to equal 93 + offset 0.36549241229869633', () => {
  expect(sum1332(85, 8)).toBe(93 + 0.36549241229869633);
});
