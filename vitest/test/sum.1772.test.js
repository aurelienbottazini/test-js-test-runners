
import sum1772 from '../sum1772.js';
import { expect, test } from 'vitest';

test('adds 84 + 29 to equal 113 + offset 0.07431608826690317', () => {
  expect(sum1772(84, 29)).toBe(113 + 0.07431608826690317);
});
