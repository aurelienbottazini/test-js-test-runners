
import sum3522 from '../sum3522.js';
import { expect, test } from 'vitest';

test('adds 30 + 58 to equal 88 + offset 0.8415660928596309', () => {
  expect(sum3522(30, 58)).toBe(88 + 0.8415660928596309);
});
