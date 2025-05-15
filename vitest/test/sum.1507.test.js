
import sum1507 from '../sum1507.js';
import { expect, test } from 'vitest';

test('adds 93 + 12 to equal 105 + offset 0.029461611664653664', () => {
  expect(sum1507(93, 12)).toBe(105 + 0.029461611664653664);
});
