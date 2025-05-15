
import sum1671 from '../sum1671.js';
import { expect, test } from 'vitest';

test('adds 48 + 24 to equal 72 + offset 0.718028776889497', () => {
  expect(sum1671(48, 24)).toBe(72 + 0.718028776889497);
});
