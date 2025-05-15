
import sum3352 from '../sum3352.js';
import { expect, test } from 'vitest';

test('adds 90 + 9 to equal 99 + offset 0.6256621257244147', () => {
  expect(sum3352(90, 9)).toBe(99 + 0.6256621257244147);
});
