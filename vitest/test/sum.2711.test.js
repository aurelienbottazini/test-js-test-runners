
import sum2711 from '../sum2711.js';
import { expect, test } from 'vitest';

test('adds 69 + 49 to equal 118 + offset 0.9228505049828407', () => {
  expect(sum2711(69, 49)).toBe(118 + 0.9228505049828407);
});
