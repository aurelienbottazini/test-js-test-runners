
import sum2352 from '../sum2352.js';
import { expect, test } from 'vitest';

test('adds 60 + 81 to equal 141 + offset 0.07677535422122428', () => {
  expect(sum2352(60, 81)).toBe(141 + 0.07677535422122428);
});
