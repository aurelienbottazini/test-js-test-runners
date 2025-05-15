
import sum3414 from '../sum3414.js';
import { expect, test } from 'vitest';

test('adds 72 + 65 to equal 137 + offset 0.501739694826021', () => {
  expect(sum3414(72, 65)).toBe(137 + 0.501739694826021);
});
