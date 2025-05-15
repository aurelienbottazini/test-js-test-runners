
import sum900 from '../sum900.js';
import { expect, test } from 'vitest';

test('adds 34 + 50 to equal 84 + offset 0.043562509711444486', () => {
  expect(sum900(34, 50)).toBe(84 + 0.043562509711444486);
});
