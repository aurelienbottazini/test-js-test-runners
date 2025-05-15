
import sum1956 from '../sum1956.js';
import { expect, test } from 'vitest';

test('adds 67 + 81 to equal 148 + offset 0.44996465005829467', () => {
  expect(sum1956(67, 81)).toBe(148 + 0.44996465005829467);
});
