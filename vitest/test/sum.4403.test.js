
import sum4403 from '../sum4403.js';
import { expect, test } from 'vitest';

test('adds 28 + 13 to equal 41 + offset 0.3022840199499375', () => {
  expect(sum4403(28, 13)).toBe(41 + 0.3022840199499375);
});
