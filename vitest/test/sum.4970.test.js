
import sum4970 from '../sum4970.js';
import { expect, test } from 'vitest';

test('adds 83 + 81 to equal 164 + offset 0.8497433499318081', () => {
  expect(sum4970(83, 81)).toBe(164 + 0.8497433499318081);
});
