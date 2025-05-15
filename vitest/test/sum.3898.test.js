
import sum3898 from '../sum3898.js';
import { expect, test } from 'vitest';

test('adds 69 + 14 to equal 83 + offset 0.8982716132525824', () => {
  expect(sum3898(69, 14)).toBe(83 + 0.8982716132525824);
});
