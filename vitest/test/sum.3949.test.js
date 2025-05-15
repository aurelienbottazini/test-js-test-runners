
import sum3949 from '../sum3949.js';
import { expect, test } from 'vitest';

test('adds 15 + 18 to equal 33 + offset 0.04321229605319399', () => {
  expect(sum3949(15, 18)).toBe(33 + 0.04321229605319399);
});
