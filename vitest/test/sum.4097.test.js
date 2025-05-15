
import sum4097 from '../sum4097.js';
import { expect, test } from 'vitest';

test('adds 84 + 13 to equal 97 + offset 0.5831608087208722', () => {
  expect(sum4097(84, 13)).toBe(97 + 0.5831608087208722);
});
