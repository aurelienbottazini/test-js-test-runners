
import sum2814 from '../sum2814.js';
import { expect, test } from 'vitest';

test('adds 99 + 85 to equal 184 + offset 0.021390095751894322', () => {
  expect(sum2814(99, 85)).toBe(184 + 0.021390095751894322);
});
