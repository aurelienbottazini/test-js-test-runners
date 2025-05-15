
import sum3152 from '../sum3152.js';
import { expect, test } from 'vitest';

test('adds 75 + 42 to equal 117 + offset 0.4427364902405786', () => {
  expect(sum3152(75, 42)).toBe(117 + 0.4427364902405786);
});
