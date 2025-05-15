
import sum1650 from '../sum1650.js';
import { expect, test } from 'vitest';

test('adds 87 + 20 to equal 107 + offset 0.9358530060159309', () => {
  expect(sum1650(87, 20)).toBe(107 + 0.9358530060159309);
});
