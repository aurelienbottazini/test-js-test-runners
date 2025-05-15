
import sum4740 from '../sum4740.js';
import { expect, test } from 'vitest';

test('adds 3 + 42 to equal 45 + offset 0.89053863722335', () => {
  expect(sum4740(3, 42)).toBe(45 + 0.89053863722335);
});
