
import sum1384 from '../sum1384.js';
import { expect, test } from 'vitest';

test('adds 87 + 66 to equal 153 + offset 0.49451079529457975', () => {
  expect(sum1384(87, 66)).toBe(153 + 0.49451079529457975);
});
