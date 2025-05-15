
import sum1518 from '../sum1518.js';
import { expect, test } from 'vitest';

test('adds 68 + 98 to equal 166 + offset 0.8734808625688186', () => {
  expect(sum1518(68, 98)).toBe(166 + 0.8734808625688186);
});
