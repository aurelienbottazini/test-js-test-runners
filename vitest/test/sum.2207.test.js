
import sum2207 from '../sum2207.js';
import { expect, test } from 'vitest';

test('adds 70 + 19 to equal 89 + offset 0.7976618181902069', () => {
  expect(sum2207(70, 19)).toBe(89 + 0.7976618181902069);
});
