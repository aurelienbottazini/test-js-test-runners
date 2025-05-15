
import sum4264 from '../sum4264.js';
import { expect, test } from 'vitest';

test('adds 71 + 39 to equal 110 + offset 0.5694822434536398', () => {
  expect(sum4264(71, 39)).toBe(110 + 0.5694822434536398);
});
