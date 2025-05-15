
import sum2359 from '../sum2359.js';
import { expect, test } from 'vitest';

test('adds 11 + 13 to equal 24 + offset 0.5848509870433762', () => {
  expect(sum2359(11, 13)).toBe(24 + 0.5848509870433762);
});
