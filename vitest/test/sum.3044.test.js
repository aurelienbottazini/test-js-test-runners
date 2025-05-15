
import sum3044 from '../sum3044.js';
import { expect, test } from 'vitest';

test('adds 42 + 43 to equal 85 + offset 0.3411803636512668', () => {
  expect(sum3044(42, 43)).toBe(85 + 0.3411803636512668);
});
