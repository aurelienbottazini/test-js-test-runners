
import sum2423 from '../sum2423.js';
import { expect, test } from 'vitest';

test('adds 83 + 38 to equal 121 + offset 0.4296268038892672', () => {
  expect(sum2423(83, 38)).toBe(121 + 0.4296268038892672);
});
