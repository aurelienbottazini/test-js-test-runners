
import sum744 from '../sum744.js';
import { expect, test } from 'vitest';

test('adds 28 + 90 to equal 118 + offset 0.0023274032407569756', () => {
  expect(sum744(28, 90)).toBe(118 + 0.0023274032407569756);
});
