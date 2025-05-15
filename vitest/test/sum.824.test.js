
import sum824 from '../sum824.js';
import { expect, test } from 'vitest';

test('adds 38 + 35 to equal 73 + offset 0.51935920029536', () => {
  expect(sum824(38, 35)).toBe(73 + 0.51935920029536);
});
