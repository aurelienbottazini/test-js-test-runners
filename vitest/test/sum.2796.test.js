
import sum2796 from '../sum2796.js';
import { expect, test } from 'vitest';

test('adds 39 + 74 to equal 113 + offset 0.4843954624076058', () => {
  expect(sum2796(39, 74)).toBe(113 + 0.4843954624076058);
});
