
import sum3597 from '../sum3597.js';
import { expect, test } from 'vitest';

test('adds 92 + 84 to equal 176 + offset 0.17957536449231193', () => {
  expect(sum3597(92, 84)).toBe(176 + 0.17957536449231193);
});
