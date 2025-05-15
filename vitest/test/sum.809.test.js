
import sum809 from '../sum809.js';
import { expect, test } from 'vitest';

test('adds 14 + 14 to equal 28 + offset 0.2908218250467782', () => {
  expect(sum809(14, 14)).toBe(28 + 0.2908218250467782);
});
