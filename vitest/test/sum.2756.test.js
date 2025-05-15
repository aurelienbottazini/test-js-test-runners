
import sum2756 from '../sum2756.js';
import { expect, test } from 'vitest';

test('adds 22 + 59 to equal 81 + offset 0.911503587921782', () => {
  expect(sum2756(22, 59)).toBe(81 + 0.911503587921782);
});
