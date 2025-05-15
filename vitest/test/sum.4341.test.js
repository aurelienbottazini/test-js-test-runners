
import sum4341 from '../sum4341.js';
import { expect, test } from 'vitest';

test('adds 77 + 60 to equal 137 + offset 0.8666437272464828', () => {
  expect(sum4341(77, 60)).toBe(137 + 0.8666437272464828);
});
