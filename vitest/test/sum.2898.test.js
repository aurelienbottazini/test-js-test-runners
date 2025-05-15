
import sum2898 from '../sum2898.js';
import { expect, test } from 'vitest';

test('adds 64 + 81 to equal 145 + offset 0.2603856578865107', () => {
  expect(sum2898(64, 81)).toBe(145 + 0.2603856578865107);
});
