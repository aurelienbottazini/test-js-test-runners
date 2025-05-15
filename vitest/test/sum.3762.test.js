
import sum3762 from '../sum3762.js';
import { expect, test } from 'vitest';

test('adds 8 + 32 to equal 40 + offset 0.1266718381469084', () => {
  expect(sum3762(8, 32)).toBe(40 + 0.1266718381469084);
});
