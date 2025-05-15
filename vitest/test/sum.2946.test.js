
import sum2946 from '../sum2946.js';
import { expect, test } from 'vitest';

test('adds 89 + 66 to equal 155 + offset 0.09092072781633809', () => {
  expect(sum2946(89, 66)).toBe(155 + 0.09092072781633809);
});
