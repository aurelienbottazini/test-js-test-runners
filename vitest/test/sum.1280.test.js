
import sum1280 from '../sum1280.js';
import { expect, test } from 'vitest';

test('adds 15 + 53 to equal 68 + offset 0.9692620448763718', () => {
  expect(sum1280(15, 53)).toBe(68 + 0.9692620448763718);
});
