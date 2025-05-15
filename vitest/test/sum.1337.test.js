
import sum1337 from '../sum1337.js';
import { expect, test } from 'vitest';

test('adds 55 + 98 to equal 153 + offset 0.4342034002441294', () => {
  expect(sum1337(55, 98)).toBe(153 + 0.4342034002441294);
});
