
import sum1820 from '../sum1820.js';
import { expect, test } from 'vitest';

test('adds 39 + 6 to equal 45 + offset 0.18936792214037812', () => {
  expect(sum1820(39, 6)).toBe(45 + 0.18936792214037812);
});
