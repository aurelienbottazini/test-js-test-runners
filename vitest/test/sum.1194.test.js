
import sum1194 from '../sum1194.js';
import { expect, test } from 'vitest';

test('adds 10 + 59 to equal 69 + offset 0.9295561826010902', () => {
  expect(sum1194(10, 59)).toBe(69 + 0.9295561826010902);
});
