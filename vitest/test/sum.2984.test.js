
import sum2984 from '../sum2984.js';
import { expect, test } from 'vitest';

test('adds 33 + 83 to equal 116 + offset 0.55963731490287', () => {
  expect(sum2984(33, 83)).toBe(116 + 0.55963731490287);
});
