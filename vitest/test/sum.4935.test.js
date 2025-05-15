
import sum4935 from '../sum4935.js';
import { expect, test } from 'vitest';

test('adds 61 + 91 to equal 152 + offset 0.3850530480648017', () => {
  expect(sum4935(61, 91)).toBe(152 + 0.3850530480648017);
});
