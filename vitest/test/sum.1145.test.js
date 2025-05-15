
import sum1145 from '../sum1145.js';
import { expect, test } from 'vitest';

test('adds 79 + 69 to equal 148 + offset 0.4517302572742098', () => {
  expect(sum1145(79, 69)).toBe(148 + 0.4517302572742098);
});
