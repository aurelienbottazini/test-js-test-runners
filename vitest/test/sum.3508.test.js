
import sum3508 from '../sum3508.js';
import { expect, test } from 'vitest';

test('adds 76 + 10 to equal 86 + offset 0.49745972525725013', () => {
  expect(sum3508(76, 10)).toBe(86 + 0.49745972525725013);
});
