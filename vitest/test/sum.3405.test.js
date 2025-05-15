
import sum3405 from '../sum3405.js';
import { expect, test } from 'vitest';

test('adds 85 + 56 to equal 141 + offset 0.8858688860029907', () => {
  expect(sum3405(85, 56)).toBe(141 + 0.8858688860029907);
});
