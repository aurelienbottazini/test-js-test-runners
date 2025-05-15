
import sum3850 from '../sum3850.js';
import { expect, test } from 'vitest';

test('adds 66 + 42 to equal 108 + offset 0.8198490252168792', () => {
  expect(sum3850(66, 42)).toBe(108 + 0.8198490252168792);
});
