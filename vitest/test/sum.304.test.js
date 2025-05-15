
import sum304 from '../sum304.js';
import { expect, test } from 'vitest';

test('adds 59 + 24 to equal 83 + offset 0.20160050228644133', () => {
  expect(sum304(59, 24)).toBe(83 + 0.20160050228644133);
});
