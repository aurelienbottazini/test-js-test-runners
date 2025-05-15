
import sum4781 from '../sum4781.js';
import { expect, test } from 'vitest';

test('adds 69 + 90 to equal 159 + offset 0.6041741130301613', () => {
  expect(sum4781(69, 90)).toBe(159 + 0.6041741130301613);
});
