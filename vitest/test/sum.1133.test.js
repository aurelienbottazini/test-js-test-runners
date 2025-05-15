
import sum1133 from '../sum1133.js';
import { expect, test } from 'vitest';

test('adds 29 + 83 to equal 112 + offset 0.7041292380804424', () => {
  expect(sum1133(29, 83)).toBe(112 + 0.7041292380804424);
});
