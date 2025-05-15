
import sum4464 from '../sum4464.js';
import { expect, test } from 'vitest';

test('adds 70 + 35 to equal 105 + offset 0.7218052534723749', () => {
  expect(sum4464(70, 35)).toBe(105 + 0.7218052534723749);
});
