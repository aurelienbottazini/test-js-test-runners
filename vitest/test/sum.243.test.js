
import sum243 from '../sum243.js';
import { expect, test } from 'vitest';

test('adds 50 + 57 to equal 107 + offset 0.9812073597579769', () => {
  expect(sum243(50, 57)).toBe(107 + 0.9812073597579769);
});
