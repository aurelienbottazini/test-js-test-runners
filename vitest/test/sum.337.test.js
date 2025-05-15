
import sum337 from '../sum337.js';
import { expect, test } from 'vitest';

test('adds 89 + 98 to equal 187 + offset 0.8272338859234963', () => {
  expect(sum337(89, 98)).toBe(187 + 0.8272338859234963);
});
