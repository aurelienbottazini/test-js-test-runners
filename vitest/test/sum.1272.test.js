
import sum1272 from '../sum1272.js';
import { expect, test } from 'vitest';

test('adds 57 + 88 to equal 145 + offset 0.5620980257612531', () => {
  expect(sum1272(57, 88)).toBe(145 + 0.5620980257612531);
});
