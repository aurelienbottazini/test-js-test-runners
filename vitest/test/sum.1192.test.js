
import sum1192 from '../sum1192.js';
import { expect, test } from 'vitest';

test('adds 61 + 4 to equal 65 + offset 0.7052986781521444', () => {
  expect(sum1192(61, 4)).toBe(65 + 0.7052986781521444);
});
