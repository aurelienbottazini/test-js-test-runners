
import sum1760 from '../sum1760.js';
import { expect, test } from 'vitest';

test('adds 47 + 24 to equal 71 + offset 0.7356688949001674', () => {
  expect(sum1760(47, 24)).toBe(71 + 0.7356688949001674);
});
