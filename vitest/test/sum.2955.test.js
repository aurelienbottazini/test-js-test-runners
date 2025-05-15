
import sum2955 from '../sum2955.js';
import { expect, test } from 'vitest';

test('adds 93 + 59 to equal 152 + offset 0.6331017960484748', () => {
  expect(sum2955(93, 59)).toBe(152 + 0.6331017960484748);
});
