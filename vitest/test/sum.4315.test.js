
import sum4315 from '../sum4315.js';
import { expect, test } from 'vitest';

test('adds 47 + 14 to equal 61 + offset 0.35771751673470065', () => {
  expect(sum4315(47, 14)).toBe(61 + 0.35771751673470065);
});
