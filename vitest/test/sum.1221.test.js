
import sum1221 from '../sum1221.js';
import { expect, test } from 'vitest';

test('adds 40 + 92 to equal 132 + offset 0.7909832304425829', () => {
  expect(sum1221(40, 92)).toBe(132 + 0.7909832304425829);
});
