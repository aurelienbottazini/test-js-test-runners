
import sum2854 from '../sum2854.js';
import { expect, test } from 'vitest';

test('adds 40 + 20 to equal 60 + offset 0.6349633928257672', () => {
  expect(sum2854(40, 20)).toBe(60 + 0.6349633928257672);
});
