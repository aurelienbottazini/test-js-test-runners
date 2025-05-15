
import sum2964 from '../sum2964.js';
import { expect, test } from 'vitest';

test('adds 39 + 51 to equal 90 + offset 0.6754269963812635', () => {
  expect(sum2964(39, 51)).toBe(90 + 0.6754269963812635);
});
