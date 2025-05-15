
import sum3943 from '../sum3943.js';
import { expect, test } from 'vitest';

test('adds 65 + 25 to equal 90 + offset 0.640640766145643', () => {
  expect(sum3943(65, 25)).toBe(90 + 0.640640766145643);
});
