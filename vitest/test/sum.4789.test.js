
import sum4789 from '../sum4789.js';
import { expect, test } from 'vitest';

test('adds 14 + 48 to equal 62 + offset 0.8751239450550233', () => {
  expect(sum4789(14, 48)).toBe(62 + 0.8751239450550233);
});
