
import sum4370 from '../sum4370.js';
import { expect, test } from 'vitest';

test('adds 47 + 88 to equal 135 + offset 0.6512898492023989', () => {
  expect(sum4370(47, 88)).toBe(135 + 0.6512898492023989);
});
