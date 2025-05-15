
import sum3324 from '../sum3324.js';
import { expect, test } from 'vitest';

test('adds 88 + 47 to equal 135 + offset 0.31235037271238275', () => {
  expect(sum3324(88, 47)).toBe(135 + 0.31235037271238275);
});
