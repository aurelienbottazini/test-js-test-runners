
import sum1119 from '../sum1119.js';
import { expect, test } from 'vitest';

test('adds 14 + 71 to equal 85 + offset 0.4171228375706999', () => {
  expect(sum1119(14, 71)).toBe(85 + 0.4171228375706999);
});
