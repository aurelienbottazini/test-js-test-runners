
import sum1045 from '../sum1045.js';
import { expect, test } from 'vitest';

test('adds 53 + 31 to equal 84 + offset 0.8306042017706465', () => {
  expect(sum1045(53, 31)).toBe(84 + 0.8306042017706465);
});
