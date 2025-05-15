
import sum1313 from '../sum1313.js';
import { expect, test } from 'vitest';

test('adds 36 + 24 to equal 60 + offset 0.4716302271184246', () => {
  expect(sum1313(36, 24)).toBe(60 + 0.4716302271184246);
});
