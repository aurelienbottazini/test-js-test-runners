
import sum4300 from '../sum4300.js';
import { expect, test } from 'vitest';

test('adds 4 + 6 to equal 10 + offset 0.3402779462016795', () => {
  expect(sum4300(4, 6)).toBe(10 + 0.3402779462016795);
});
