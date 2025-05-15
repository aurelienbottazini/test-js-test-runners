
import sum3500 from '../sum3500.js';
import { expect, test } from 'vitest';

test('adds 99 + 12 to equal 111 + offset 0.3545385273667918', () => {
  expect(sum3500(99, 12)).toBe(111 + 0.3545385273667918);
});
