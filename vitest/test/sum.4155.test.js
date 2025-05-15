
import sum4155 from '../sum4155.js';
import { expect, test } from 'vitest';

test('adds 60 + 60 to equal 120 + offset 0.6290871660023782', () => {
  expect(sum4155(60, 60)).toBe(120 + 0.6290871660023782);
});
