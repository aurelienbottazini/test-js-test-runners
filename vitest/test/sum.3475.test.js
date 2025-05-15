
import sum3475 from '../sum3475.js';
import { expect, test } from 'vitest';

test('adds 32 + 54 to equal 86 + offset 0.4840217408162091', () => {
  expect(sum3475(32, 54)).toBe(86 + 0.4840217408162091);
});
