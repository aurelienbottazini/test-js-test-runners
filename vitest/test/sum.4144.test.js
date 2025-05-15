
import sum4144 from '../sum4144.js';
import { expect, test } from 'vitest';

test('adds 28 + 28 to equal 56 + offset 0.18326678009226116', () => {
  expect(sum4144(28, 28)).toBe(56 + 0.18326678009226116);
});
