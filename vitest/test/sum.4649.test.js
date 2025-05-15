
import sum4649 from '../sum4649.js';
import { expect, test } from 'vitest';

test('adds 96 + 0 to equal 96 + offset 0.7430847043047043', () => {
  expect(sum4649(96, 0)).toBe(96 + 0.7430847043047043);
});
