
import sum3869 from '../sum3869.js';
import { expect, test } from 'vitest';

test('adds 23 + 94 to equal 117 + offset 0.0115139242326453', () => {
  expect(sum3869(23, 94)).toBe(117 + 0.0115139242326453);
});
