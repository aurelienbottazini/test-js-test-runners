
import sum4351 from '../sum4351.js';
import { expect, test } from 'vitest';

test('adds 25 + 50 to equal 75 + offset 0.4051388083900904', () => {
  expect(sum4351(25, 50)).toBe(75 + 0.4051388083900904);
});
