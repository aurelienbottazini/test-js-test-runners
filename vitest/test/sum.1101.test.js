
import sum1101 from '../sum1101.js';
import { expect, test } from 'vitest';

test('adds 10 + 36 to equal 46 + offset 0.10278547706757346', () => {
  expect(sum1101(10, 36)).toBe(46 + 0.10278547706757346);
});
