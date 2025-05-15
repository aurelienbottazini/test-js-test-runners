
import sum3828 from '../sum3828.js';
import { expect, test } from 'vitest';

test('adds 8 + 25 to equal 33 + offset 0.8034005878803929', () => {
  expect(sum3828(8, 25)).toBe(33 + 0.8034005878803929);
});
