
import sum1649 from '../sum1649.js';
import { expect, test } from 'vitest';

test('adds 14 + 87 to equal 101 + offset 0.15559183224057793', () => {
  expect(sum1649(14, 87)).toBe(101 + 0.15559183224057793);
});
