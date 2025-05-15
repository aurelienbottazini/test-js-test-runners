
import sum4485 from '../sum4485.js';
import { expect, test } from 'vitest';

test('adds 36 + 51 to equal 87 + offset 0.3539188535106632', () => {
  expect(sum4485(36, 51)).toBe(87 + 0.3539188535106632);
});
