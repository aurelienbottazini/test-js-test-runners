
import sum1979 from '../sum1979.js';
import { expect, test } from 'vitest';

test('adds 48 + 24 to equal 72 + offset 0.3190919238667923', () => {
  expect(sum1979(48, 24)).toBe(72 + 0.3190919238667923);
});
