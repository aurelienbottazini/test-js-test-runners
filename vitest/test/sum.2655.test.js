
import sum2655 from '../sum2655.js';
import { expect, test } from 'vitest';

test('adds 53 + 72 to equal 125 + offset 0.09650434861478552', () => {
  expect(sum2655(53, 72)).toBe(125 + 0.09650434861478552);
});
