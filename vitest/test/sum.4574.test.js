
import sum4574 from '../sum4574.js';
import { expect, test } from 'vitest';

test('adds 8 + 94 to equal 102 + offset 0.5267955527768486', () => {
  expect(sum4574(8, 94)).toBe(102 + 0.5267955527768486);
});
