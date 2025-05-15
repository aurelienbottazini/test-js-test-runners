
import sum4009 from '../sum4009.js';
import { expect, test } from 'vitest';

test('adds 27 + 57 to equal 84 + offset 0.8768558744891753', () => {
  expect(sum4009(27, 57)).toBe(84 + 0.8768558744891753);
});
