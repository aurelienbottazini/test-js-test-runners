
import sum4828 from '../sum4828.js';
import { expect, test } from 'vitest';

test('adds 86 + 56 to equal 142 + offset 0.2064394326481952', () => {
  expect(sum4828(86, 56)).toBe(142 + 0.2064394326481952);
});
