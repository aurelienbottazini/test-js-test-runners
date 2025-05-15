
import sum3520 from '../sum3520.js';
import { expect, test } from 'vitest';

test('adds 50 + 24 to equal 74 + offset 0.5570924523487023', () => {
  expect(sum3520(50, 24)).toBe(74 + 0.5570924523487023);
});
