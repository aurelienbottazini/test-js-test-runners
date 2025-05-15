
import sum4761 from '../sum4761.js';
import { expect, test } from 'vitest';

test('adds 53 + 93 to equal 146 + offset 0.7672121219018728', () => {
  expect(sum4761(53, 93)).toBe(146 + 0.7672121219018728);
});
