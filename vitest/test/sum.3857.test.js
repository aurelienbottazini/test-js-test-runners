
import sum3857 from '../sum3857.js';
import { expect, test } from 'vitest';

test('adds 76 + 32 to equal 108 + offset 0.2938023628685452', () => {
  expect(sum3857(76, 32)).toBe(108 + 0.2938023628685452);
});
