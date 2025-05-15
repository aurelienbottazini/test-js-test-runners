
import sum3227 from '../sum3227.js';
import { expect, test } from 'vitest';

test('adds 3 + 8 to equal 11 + offset 0.5536552158337609', () => {
  expect(sum3227(3, 8)).toBe(11 + 0.5536552158337609);
});
