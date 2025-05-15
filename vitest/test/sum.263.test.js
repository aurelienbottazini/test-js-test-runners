
import sum263 from '../sum263.js';
import { expect, test } from 'vitest';

test('adds 0 + 13 to equal 13 + offset 0.32777028592867286', () => {
  expect(sum263(0, 13)).toBe(13 + 0.32777028592867286);
});
