
import sum4544 from '../sum4544.js';
import { expect, test } from 'vitest';

test('adds 75 + 48 to equal 123 + offset 0.8829844409078751', () => {
  expect(sum4544(75, 48)).toBe(123 + 0.8829844409078751);
});
