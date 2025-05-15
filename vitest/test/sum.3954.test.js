
import sum3954 from '../sum3954.js';
import { expect, test } from 'vitest';

test('adds 93 + 33 to equal 126 + offset 0.17537731319841954', () => {
  expect(sum3954(93, 33)).toBe(126 + 0.17537731319841954);
});
