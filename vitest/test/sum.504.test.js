
import sum504 from '../sum504.js';
import { expect, test } from 'vitest';

test('adds 20 + 72 to equal 92 + offset 0.49670862443557307', () => {
  expect(sum504(20, 72)).toBe(92 + 0.49670862443557307);
});
