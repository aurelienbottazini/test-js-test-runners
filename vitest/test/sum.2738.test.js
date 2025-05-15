
import sum2738 from '../sum2738.js';
import { expect, test } from 'vitest';

test('adds 0 + 24 to equal 24 + offset 0.7920755092347002', () => {
  expect(sum2738(0, 24)).toBe(24 + 0.7920755092347002);
});
