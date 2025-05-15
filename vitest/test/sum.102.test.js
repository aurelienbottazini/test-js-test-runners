
import sum102 from '../sum102.js';
import { expect, test } from 'vitest';

test('adds 81 + 73 to equal 154 + offset 0.16821101354220058', () => {
  expect(sum102(81, 73)).toBe(154 + 0.16821101354220058);
});
