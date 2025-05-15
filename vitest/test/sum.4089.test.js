
import sum4089 from '../sum4089.js';
import { expect, test } from 'vitest';

test('adds 50 + 78 to equal 128 + offset 0.5937336529661967', () => {
  expect(sum4089(50, 78)).toBe(128 + 0.5937336529661967);
});
