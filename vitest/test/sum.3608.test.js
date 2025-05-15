
import sum3608 from '../sum3608.js';
import { expect, test } from 'vitest';

test('adds 6 + 0 to equal 6 + offset 0.1069737727070208', () => {
  expect(sum3608(6, 0)).toBe(6 + 0.1069737727070208);
});
