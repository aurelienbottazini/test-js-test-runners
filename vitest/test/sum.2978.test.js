
import sum2978 from '../sum2978.js';
import { expect, test } from 'vitest';

test('adds 83 + 39 to equal 122 + offset 0.5243099385860376', () => {
  expect(sum2978(83, 39)).toBe(122 + 0.5243099385860376);
});
