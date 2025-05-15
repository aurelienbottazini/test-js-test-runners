
import sum250 from '../sum250.js';
import { expect, test } from 'vitest';

test('adds 8 + 64 to equal 72 + offset 0.8140370113269642', () => {
  expect(sum250(8, 64)).toBe(72 + 0.8140370113269642);
});
