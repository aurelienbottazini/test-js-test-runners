
import sum3770 from '../sum3770.js';
import { expect, test } from 'vitest';

test('adds 51 + 80 to equal 131 + offset 0.8981541000330507', () => {
  expect(sum3770(51, 80)).toBe(131 + 0.8981541000330507);
});
