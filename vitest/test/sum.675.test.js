
import sum675 from '../sum675.js';
import { expect, test } from 'vitest';

test('adds 72 + 12 to equal 84 + offset 0.602580577074667', () => {
  expect(sum675(72, 12)).toBe(84 + 0.602580577074667);
});
