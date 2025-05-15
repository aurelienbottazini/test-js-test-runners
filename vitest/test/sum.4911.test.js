
import sum4911 from '../sum4911.js';
import { expect, test } from 'vitest';

test('adds 42 + 90 to equal 132 + offset 0.829053207959283', () => {
  expect(sum4911(42, 90)).toBe(132 + 0.829053207959283);
});
