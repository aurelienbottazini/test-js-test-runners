
import sum528 from '../sum528.js';
import { expect, test } from 'vitest';

test('adds 89 + 91 to equal 180 + offset 0.7250753292518632', () => {
  expect(sum528(89, 91)).toBe(180 + 0.7250753292518632);
});
