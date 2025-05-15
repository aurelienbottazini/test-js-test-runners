
import sum4251 from '../sum4251.js';
import { expect, test } from 'vitest';

test('adds 18 + 10 to equal 28 + offset 0.5061732181472792', () => {
  expect(sum4251(18, 10)).toBe(28 + 0.5061732181472792);
});
