
import sum106 from '../sum106.js';
import { expect, test } from 'vitest';

test('adds 1 + 92 to equal 93 + offset 0.5685477843664891', () => {
  expect(sum106(1, 92)).toBe(93 + 0.5685477843664891);
});
