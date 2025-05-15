
import sum3161 from '../sum3161.js';
import { expect, test } from 'vitest';

test('adds 2 + 81 to equal 83 + offset 0.4032207344962707', () => {
  expect(sum3161(2, 81)).toBe(83 + 0.4032207344962707);
});
