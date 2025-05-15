
import sum4907 from '../sum4907.js';
import { expect, test } from 'vitest';

test('adds 39 + 24 to equal 63 + offset 0.8521248716086841', () => {
  expect(sum4907(39, 24)).toBe(63 + 0.8521248716086841);
});
