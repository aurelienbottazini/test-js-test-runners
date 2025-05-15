
import sum4376 from '../sum4376.js';
import { expect, test } from 'vitest';

test('adds 18 + 42 to equal 60 + offset 0.9021058948910295', () => {
  expect(sum4376(18, 42)).toBe(60 + 0.9021058948910295);
});
