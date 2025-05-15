
import sum555 from '../sum555.js';
import { expect, test } from 'vitest';

test('adds 7 + 93 to equal 100 + offset 0.8725787688784938', () => {
  expect(sum555(7, 93)).toBe(100 + 0.8725787688784938);
});
