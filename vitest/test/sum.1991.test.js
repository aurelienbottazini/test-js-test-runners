
import sum1991 from '../sum1991.js';
import { expect, test } from 'vitest';

test('adds 42 + 16 to equal 58 + offset 0.3548112044042492', () => {
  expect(sum1991(42, 16)).toBe(58 + 0.3548112044042492);
});
