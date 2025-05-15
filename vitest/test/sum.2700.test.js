
import sum2700 from '../sum2700.js';
import { expect, test } from 'vitest';

test('adds 55 + 1 to equal 56 + offset 0.04365795976939446', () => {
  expect(sum2700(55, 1)).toBe(56 + 0.04365795976939446);
});
