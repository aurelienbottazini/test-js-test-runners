
import sum4158 from '../sum4158.js';
import { expect, test } from 'vitest';

test('adds 28 + 60 to equal 88 + offset 0.5206902431963848', () => {
  expect(sum4158(28, 60)).toBe(88 + 0.5206902431963848);
});
