
import sum1613 from '../sum1613.js';
import { expect, test } from 'vitest';

test('adds 88 + 5 to equal 93 + offset 0.9363739364242026', () => {
  expect(sum1613(88, 5)).toBe(93 + 0.9363739364242026);
});
