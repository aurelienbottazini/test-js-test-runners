
import sum3146 from '../sum3146.js';
import { expect, test } from 'vitest';

test('adds 63 + 91 to equal 154 + offset 0.250235919096635', () => {
  expect(sum3146(63, 91)).toBe(154 + 0.250235919096635);
});
