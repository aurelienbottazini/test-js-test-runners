
import sum1727 from '../sum1727.js';
import { expect, test } from 'vitest';

test('adds 46 + 41 to equal 87 + offset 0.15140404985012235', () => {
  expect(sum1727(46, 41)).toBe(87 + 0.15140404985012235);
});
