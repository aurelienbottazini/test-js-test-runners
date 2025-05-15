
import sum1969 from '../sum1969.js';
import { expect, test } from 'vitest';

test('adds 11 + 52 to equal 63 + offset 0.20868047209845464', () => {
  expect(sum1969(11, 52)).toBe(63 + 0.20868047209845464);
});
