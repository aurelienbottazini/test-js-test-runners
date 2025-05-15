
import sum3851 from '../sum3851.js';
import { expect, test } from 'vitest';

test('adds 50 + 16 to equal 66 + offset 0.11965080622785473', () => {
  expect(sum3851(50, 16)).toBe(66 + 0.11965080622785473);
});
