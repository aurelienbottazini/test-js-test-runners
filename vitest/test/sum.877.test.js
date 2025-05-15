
import sum877 from '../sum877.js';
import { expect, test } from 'vitest';

test('adds 60 + 32 to equal 92 + offset 0.5021404392674284', () => {
  expect(sum877(60, 32)).toBe(92 + 0.5021404392674284);
});
