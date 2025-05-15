
import sum1200 from '../sum1200.js';
import { expect, test } from 'vitest';

test('adds 19 + 59 to equal 78 + offset 0.3685426690741125', () => {
  expect(sum1200(19, 59)).toBe(78 + 0.3685426690741125);
});
