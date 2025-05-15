
import sum346 from '../sum346.js';
import { expect, test } from 'vitest';

test('adds 26 + 45 to equal 71 + offset 0.2376335918367365', () => {
  expect(sum346(26, 45)).toBe(71 + 0.2376335918367365);
});
