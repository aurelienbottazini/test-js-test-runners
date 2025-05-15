
import sum1873 from '../sum1873.js';
import { expect, test } from 'vitest';

test('adds 66 + 72 to equal 138 + offset 0.21856929685344006', () => {
  expect(sum1873(66, 72)).toBe(138 + 0.21856929685344006);
});
