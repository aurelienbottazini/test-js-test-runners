
import sum377 from '../sum377.js';
import { expect, test } from 'vitest';

test('adds 41 + 93 to equal 134 + offset 0.5688552961558704', () => {
  expect(sum377(41, 93)).toBe(134 + 0.5688552961558704);
});
