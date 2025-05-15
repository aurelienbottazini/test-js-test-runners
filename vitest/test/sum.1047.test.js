
import sum1047 from '../sum1047.js';
import { expect, test } from 'vitest';

test('adds 85 + 68 to equal 153 + offset 0.27057578481873146', () => {
  expect(sum1047(85, 68)).toBe(153 + 0.27057578481873146);
});
