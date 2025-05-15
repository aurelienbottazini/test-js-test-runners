
import sum3239 from '../sum3239.js';
import { expect, test } from 'vitest';

test('adds 11 + 48 to equal 59 + offset 0.9923134574779232', () => {
  expect(sum3239(11, 48)).toBe(59 + 0.9923134574779232);
});
