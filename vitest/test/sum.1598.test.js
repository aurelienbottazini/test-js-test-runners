
import sum1598 from '../sum1598.js';
import { expect, test } from 'vitest';

test('adds 11 + 93 to equal 104 + offset 0.7946927814577195', () => {
  expect(sum1598(11, 93)).toBe(104 + 0.7946927814577195);
});
