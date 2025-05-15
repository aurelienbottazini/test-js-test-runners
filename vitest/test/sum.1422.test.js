
import sum1422 from '../sum1422.js';
import { expect, test } from 'vitest';

test('adds 27 + 12 to equal 39 + offset 0.16735427887923715', () => {
  expect(sum1422(27, 12)).toBe(39 + 0.16735427887923715);
});
