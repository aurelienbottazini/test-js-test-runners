
import sum4749 from '../sum4749.js';
import { expect, test } from 'vitest';

test('adds 51 + 44 to equal 95 + offset 0.7945973527424766', () => {
  expect(sum4749(51, 44)).toBe(95 + 0.7945973527424766);
});
