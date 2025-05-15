
import sum3360 from '../sum3360.js';
import { expect, test } from 'vitest';

test('adds 19 + 29 to equal 48 + offset 0.7156972645603235', () => {
  expect(sum3360(19, 29)).toBe(48 + 0.7156972645603235);
});
