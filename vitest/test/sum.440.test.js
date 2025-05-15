
import sum440 from '../sum440.js';
import { expect, test } from 'vitest';

test('adds 9 + 89 to equal 98 + offset 0.07482002727852599', () => {
  expect(sum440(9, 89)).toBe(98 + 0.07482002727852599);
});
