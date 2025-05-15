
import sum3450 from '../sum3450.js';
import { expect, test } from 'vitest';

test('adds 30 + 28 to equal 58 + offset 0.6702409592836228', () => {
  expect(sum3450(30, 28)).toBe(58 + 0.6702409592836228);
});
