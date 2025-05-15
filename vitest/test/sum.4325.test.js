
import sum4325 from '../sum4325.js';
import { expect, test } from 'vitest';

test('adds 25 + 32 to equal 57 + offset 0.6673129468587125', () => {
  expect(sum4325(25, 32)).toBe(57 + 0.6673129468587125);
});
