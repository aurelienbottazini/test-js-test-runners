
import sum1902 from '../sum1902.js';
import { expect, test } from 'vitest';

test('adds 38 + 24 to equal 62 + offset 0.20629732700782177', () => {
  expect(sum1902(38, 24)).toBe(62 + 0.20629732700782177);
});
