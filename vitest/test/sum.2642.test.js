
import sum2642 from '../sum2642.js';
import { expect, test } from 'vitest';

test('adds 4 + 8 to equal 12 + offset 0.27900246943542006', () => {
  expect(sum2642(4, 8)).toBe(12 + 0.27900246943542006);
});
