
import sum4838 from '../sum4838.js';
import { expect, test } from 'vitest';

test('adds 80 + 19 to equal 99 + offset 0.46838480773933844', () => {
  expect(sum4838(80, 19)).toBe(99 + 0.46838480773933844);
});
