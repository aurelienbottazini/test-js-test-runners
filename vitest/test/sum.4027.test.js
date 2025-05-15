
import sum4027 from '../sum4027.js';
import { expect, test } from 'vitest';

test('adds 66 + 42 to equal 108 + offset 0.8475099950376309', () => {
  expect(sum4027(66, 42)).toBe(108 + 0.8475099950376309);
});
