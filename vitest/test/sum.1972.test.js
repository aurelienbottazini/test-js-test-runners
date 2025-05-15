
import sum1972 from '../sum1972.js';
import { expect, test } from 'vitest';

test('adds 29 + 60 to equal 89 + offset 0.7144722201973485', () => {
  expect(sum1972(29, 60)).toBe(89 + 0.7144722201973485);
});
