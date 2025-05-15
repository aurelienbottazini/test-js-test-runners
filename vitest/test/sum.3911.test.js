
import sum3911 from '../sum3911.js';
import { expect, test } from 'vitest';

test('adds 8 + 43 to equal 51 + offset 0.7706927944928029', () => {
  expect(sum3911(8, 43)).toBe(51 + 0.7706927944928029);
});
