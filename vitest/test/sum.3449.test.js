
import sum3449 from '../sum3449.js';
import { expect, test } from 'vitest';

test('adds 19 + 27 to equal 46 + offset 0.06484405899984091', () => {
  expect(sum3449(19, 27)).toBe(46 + 0.06484405899984091);
});
