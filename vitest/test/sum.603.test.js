
import sum603 from '../sum603.js';
import { expect, test } from 'vitest';

test('adds 56 + 29 to equal 85 + offset 0.5400872608505548', () => {
  expect(sum603(56, 29)).toBe(85 + 0.5400872608505548);
});
