
import sum2013 from '../sum2013.js';
import { expect, test } from 'vitest';

test('adds 26 + 83 to equal 109 + offset 0.285757880681905', () => {
  expect(sum2013(26, 83)).toBe(109 + 0.285757880681905);
});
