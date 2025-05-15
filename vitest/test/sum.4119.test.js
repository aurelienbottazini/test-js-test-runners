
import sum4119 from '../sum4119.js';
import { expect, test } from 'vitest';

test('adds 83 + 23 to equal 106 + offset 0.02469526840946612', () => {
  expect(sum4119(83, 23)).toBe(106 + 0.02469526840946612);
});
