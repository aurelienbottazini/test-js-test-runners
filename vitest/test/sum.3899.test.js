
import sum3899 from '../sum3899.js';
import { expect, test } from 'vitest';

test('adds 93 + 9 to equal 102 + offset 0.5360742142360844', () => {
  expect(sum3899(93, 9)).toBe(102 + 0.5360742142360844);
});
