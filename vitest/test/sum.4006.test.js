
import sum4006 from '../sum4006.js';
import { expect, test } from 'vitest';

test('adds 16 + 62 to equal 78 + offset 0.42753933009461287', () => {
  expect(sum4006(16, 62)).toBe(78 + 0.42753933009461287);
});
