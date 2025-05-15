
import sum105 from '../sum105.js';
import { expect, test } from 'vitest';

test('adds 30 + 28 to equal 58 + offset 0.44576340431854633', () => {
  expect(sum105(30, 28)).toBe(58 + 0.44576340431854633);
});
