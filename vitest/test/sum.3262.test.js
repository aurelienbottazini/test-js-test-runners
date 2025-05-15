
import sum3262 from '../sum3262.js';
import { expect, test } from 'vitest';

test('adds 43 + 71 to equal 114 + offset 0.42054601857579965', () => {
  expect(sum3262(43, 71)).toBe(114 + 0.42054601857579965);
});
