
import sum924 from '../sum924.js';
import { expect, test } from 'vitest';

test('adds 79 + 35 to equal 114 + offset 0.07750123945765852', () => {
  expect(sum924(79, 35)).toBe(114 + 0.07750123945765852);
});
