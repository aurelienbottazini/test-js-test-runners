
import sum3905 from '../sum3905.js';
import { expect, test } from 'vitest';

test('adds 8 + 57 to equal 65 + offset 0.015007557490751777', () => {
  expect(sum3905(8, 57)).toBe(65 + 0.015007557490751777);
});
