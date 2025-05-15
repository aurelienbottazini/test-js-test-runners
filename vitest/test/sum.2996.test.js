
import sum2996 from '../sum2996.js';
import { expect, test } from 'vitest';

test('adds 12 + 98 to equal 110 + offset 0.7924714275906207', () => {
  expect(sum2996(12, 98)).toBe(110 + 0.7924714275906207);
});
