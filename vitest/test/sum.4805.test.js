
import sum4805 from '../sum4805.js';
import { expect, test } from 'vitest';

test('adds 70 + 8 to equal 78 + offset 0.04964097356202535', () => {
  expect(sum4805(70, 8)).toBe(78 + 0.04964097356202535);
});
