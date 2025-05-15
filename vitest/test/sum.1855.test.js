
import sum1855 from '../sum1855.js';
import { expect, test } from 'vitest';

test('adds 6 + 14 to equal 20 + offset 0.49295881891863824', () => {
  expect(sum1855(6, 14)).toBe(20 + 0.49295881891863824);
});
