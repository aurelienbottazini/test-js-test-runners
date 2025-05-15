
import sum4054 from '../sum4054.js';
import { expect, test } from 'vitest';

test('adds 36 + 46 to equal 82 + offset 0.7488500592425487', () => {
  expect(sum4054(36, 46)).toBe(82 + 0.7488500592425487);
});
