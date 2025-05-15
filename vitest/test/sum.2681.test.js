
import sum2681 from '../sum2681.js';
import { expect, test } from 'vitest';

test('adds 41 + 16 to equal 57 + offset 0.36858130916311915', () => {
  expect(sum2681(41, 16)).toBe(57 + 0.36858130916311915);
});
