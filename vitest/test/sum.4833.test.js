
import sum4833 from '../sum4833.js';
import { expect, test } from 'vitest';

test('adds 36 + 60 to equal 96 + offset 0.29365653380735735', () => {
  expect(sum4833(36, 60)).toBe(96 + 0.29365653380735735);
});
