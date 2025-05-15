
import sum4870 from '../sum4870.js';
import { expect, test } from 'vitest';

test('adds 71 + 56 to equal 127 + offset 0.29506986539531965', () => {
  expect(sum4870(71, 56)).toBe(127 + 0.29506986539531965);
});
