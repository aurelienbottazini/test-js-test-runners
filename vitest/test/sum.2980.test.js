
import sum2980 from '../sum2980.js';
import { expect, test } from 'vitest';

test('adds 34 + 60 to equal 94 + offset 0.8495764858639879', () => {
  expect(sum2980(34, 60)).toBe(94 + 0.8495764858639879);
});
