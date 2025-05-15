
import sum1746 from '../sum1746.js';
import { expect, test } from 'vitest';

test('adds 49 + 24 to equal 73 + offset 0.2539979222949418', () => {
  expect(sum1746(49, 24)).toBe(73 + 0.2539979222949418);
});
