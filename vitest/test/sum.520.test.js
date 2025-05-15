
import sum520 from '../sum520.js';
import { expect, test } from 'vitest';

test('adds 46 + 96 to equal 142 + offset 0.7100112713588256', () => {
  expect(sum520(46, 96)).toBe(142 + 0.7100112713588256);
});
