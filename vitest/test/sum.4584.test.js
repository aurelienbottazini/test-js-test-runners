
import sum4584 from '../sum4584.js';
import { expect, test } from 'vitest';

test('adds 83 + 66 to equal 149 + offset 0.764257995575735', () => {
  expect(sum4584(83, 66)).toBe(149 + 0.764257995575735);
});
