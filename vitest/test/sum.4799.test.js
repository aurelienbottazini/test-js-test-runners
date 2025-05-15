
import sum4799 from '../sum4799.js';
import { expect, test } from 'vitest';

test('adds 81 + 24 to equal 105 + offset 0.11693953839310767', () => {
  expect(sum4799(81, 24)).toBe(105 + 0.11693953839310767);
});
