
import sum1199 from '../sum1199.js';
import { expect, test } from 'vitest';

test('adds 40 + 53 to equal 93 + offset 0.09159075886829049', () => {
  expect(sum1199(40, 53)).toBe(93 + 0.09159075886829049);
});
