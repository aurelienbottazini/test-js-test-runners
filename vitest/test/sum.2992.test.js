
import sum2992 from '../sum2992.js';
import { expect, test } from 'vitest';

test('adds 33 + 18 to equal 51 + offset 0.8381099312572438', () => {
  expect(sum2992(33, 18)).toBe(51 + 0.8381099312572438);
});
