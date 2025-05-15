
import sum4398 from '../sum4398.js';
import { expect, test } from 'vitest';

test('adds 74 + 0 to equal 74 + offset 0.09447594257689307', () => {
  expect(sum4398(74, 0)).toBe(74 + 0.09447594257689307);
});
