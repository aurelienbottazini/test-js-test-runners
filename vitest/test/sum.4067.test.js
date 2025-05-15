
import sum4067 from '../sum4067.js';
import { expect, test } from 'vitest';

test('adds 81 + 96 to equal 177 + offset 0.6936825023595505', () => {
  expect(sum4067(81, 96)).toBe(177 + 0.6936825023595505);
});
