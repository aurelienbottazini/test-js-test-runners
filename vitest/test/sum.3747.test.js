
import sum3747 from '../sum3747.js';
import { expect, test } from 'vitest';

test('adds 32 + 80 to equal 112 + offset 0.2854392335041612', () => {
  expect(sum3747(32, 80)).toBe(112 + 0.2854392335041612);
});
