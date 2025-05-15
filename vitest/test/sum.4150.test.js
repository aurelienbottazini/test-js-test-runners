
import sum4150 from '../sum4150.js';
import { expect, test } from 'vitest';

test('adds 39 + 15 to equal 54 + offset 0.2760765599885914', () => {
  expect(sum4150(39, 15)).toBe(54 + 0.2760765599885914);
});
