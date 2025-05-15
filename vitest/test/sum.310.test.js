
import sum310 from '../sum310.js';
import { expect, test } from 'vitest';

test('adds 18 + 71 to equal 89 + offset 0.7234013370751343', () => {
  expect(sum310(18, 71)).toBe(89 + 0.7234013370751343);
});
