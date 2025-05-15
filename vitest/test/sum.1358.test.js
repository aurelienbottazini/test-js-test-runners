
import sum1358 from '../sum1358.js';
import { expect, test } from 'vitest';

test('adds 81 + 60 to equal 141 + offset 0.8795238335767284', () => {
  expect(sum1358(81, 60)).toBe(141 + 0.8795238335767284);
});
