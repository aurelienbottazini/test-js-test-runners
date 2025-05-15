
import sum2764 from '../sum2764.js';
import { expect, test } from 'vitest';

test('adds 96 + 37 to equal 133 + offset 0.11894413421328554', () => {
  expect(sum2764(96, 37)).toBe(133 + 0.11894413421328554);
});
