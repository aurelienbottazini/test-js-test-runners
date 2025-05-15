
import sum3999 from '../sum3999.js';
import { expect, test } from 'vitest';

test('adds 98 + 33 to equal 131 + offset 0.527353070122042', () => {
  expect(sum3999(98, 33)).toBe(131 + 0.527353070122042);
});
