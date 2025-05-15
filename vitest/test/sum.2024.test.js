
import sum2024 from '../sum2024.js';
import { expect, test } from 'vitest';

test('adds 18 + 97 to equal 115 + offset 0.6856656640509579', () => {
  expect(sum2024(18, 97)).toBe(115 + 0.6856656640509579);
});
