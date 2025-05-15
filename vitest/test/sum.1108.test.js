
import sum1108 from '../sum1108.js';
import { expect, test } from 'vitest';

test('adds 19 + 83 to equal 102 + offset 0.0032064801902742524', () => {
  expect(sum1108(19, 83)).toBe(102 + 0.0032064801902742524);
});
