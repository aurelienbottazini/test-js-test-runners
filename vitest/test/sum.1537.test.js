
import sum1537 from '../sum1537.js';
import { expect, test } from 'vitest';

test('adds 14 + 21 to equal 35 + offset 0.5397849798966012', () => {
  expect(sum1537(14, 21)).toBe(35 + 0.5397849798966012);
});
