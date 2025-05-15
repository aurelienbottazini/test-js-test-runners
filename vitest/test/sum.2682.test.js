
import sum2682 from '../sum2682.js';
import { expect, test } from 'vitest';

test('adds 28 + 11 to equal 39 + offset 0.33432912846712226', () => {
  expect(sum2682(28, 11)).toBe(39 + 0.33432912846712226);
});
