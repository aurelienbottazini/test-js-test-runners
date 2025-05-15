
import sum3811 from '../sum3811.js';
import { expect, test } from 'vitest';

test('adds 66 + 87 to equal 153 + offset 0.6669477065658789', () => {
  expect(sum3811(66, 87)).toBe(153 + 0.6669477065658789);
});
