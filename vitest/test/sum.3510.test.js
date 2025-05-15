
import sum3510 from '../sum3510.js';
import { expect, test } from 'vitest';

test('adds 24 + 91 to equal 115 + offset 0.6698762759599025', () => {
  expect(sum3510(24, 91)).toBe(115 + 0.6698762759599025);
});
