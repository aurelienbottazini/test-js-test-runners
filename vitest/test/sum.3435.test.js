
import sum3435 from '../sum3435.js';
import { expect, test } from 'vitest';

test('adds 7 + 99 to equal 106 + offset 0.6162303047878241', () => {
  expect(sum3435(7, 99)).toBe(106 + 0.6162303047878241);
});
