
import sum730 from '../sum730.js';
import { expect, test } from 'vitest';

test('adds 43 + 80 to equal 123 + offset 0.4450011037983712', () => {
  expect(sum730(43, 80)).toBe(123 + 0.4450011037983712);
});
