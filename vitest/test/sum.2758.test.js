
import sum2758 from '../sum2758.js';
import { expect, test } from 'vitest';

test('adds 70 + 79 to equal 149 + offset 0.2868709820748483', () => {
  expect(sum2758(70, 79)).toBe(149 + 0.2868709820748483);
});
