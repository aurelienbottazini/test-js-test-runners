
import sum4428 from '../sum4428.js';
import { expect, test } from 'vitest';

test('adds 72 + 22 to equal 94 + offset 0.5977325564134232', () => {
  expect(sum4428(72, 22)).toBe(94 + 0.5977325564134232);
});
