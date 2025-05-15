
import sum2405 from '../sum2405.js';
import { expect, test } from 'vitest';

test('adds 27 + 38 to equal 65 + offset 0.047071714485794725', () => {
  expect(sum2405(27, 38)).toBe(65 + 0.047071714485794725);
});
