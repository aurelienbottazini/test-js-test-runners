
import sum3710 from '../sum3710.js';
import { expect, test } from 'vitest';

test('adds 69 + 23 to equal 92 + offset 0.5311100549555641', () => {
  expect(sum3710(69, 23)).toBe(92 + 0.5311100549555641);
});
