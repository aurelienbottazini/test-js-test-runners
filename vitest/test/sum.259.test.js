
import sum259 from '../sum259.js';
import { expect, test } from 'vitest';

test('adds 62 + 45 to equal 107 + offset 0.10509083355624538', () => {
  expect(sum259(62, 45)).toBe(107 + 0.10509083355624538);
});
