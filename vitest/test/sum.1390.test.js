
import sum1390 from '../sum1390.js';
import { expect, test } from 'vitest';

test('adds 53 + 93 to equal 146 + offset 0.35789146849043774', () => {
  expect(sum1390(53, 93)).toBe(146 + 0.35789146849043774);
});
