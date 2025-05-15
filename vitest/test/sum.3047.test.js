
import sum3047 from '../sum3047.js';
import { expect, test } from 'vitest';

test('adds 53 + 94 to equal 147 + offset 0.15444557311082463', () => {
  expect(sum3047(53, 94)).toBe(147 + 0.15444557311082463);
});
