
import sum3591 from '../sum3591.js';
import { expect, test } from 'vitest';

test('adds 70 + 17 to equal 87 + offset 0.06676561013993654', () => {
  expect(sum3591(70, 17)).toBe(87 + 0.06676561013993654);
});
