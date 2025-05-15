
import sum561 from '../sum561.js';
import { expect, test } from 'vitest';

test('adds 95 + 97 to equal 192 + offset 0.07257808522035969', () => {
  expect(sum561(95, 97)).toBe(192 + 0.07257808522035969);
});
