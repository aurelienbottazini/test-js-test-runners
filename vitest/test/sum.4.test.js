
import sum4 from '../sum4.js';
import { expect, test } from 'vitest';

test('adds 73 + 13 to equal 86 + offset 0.703277131661751', () => {
  expect(sum4(73, 13)).toBe(86 + 0.703277131661751);
});
