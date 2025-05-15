
import sum161 from '../sum161.js';
import { expect, test } from 'vitest';

test('adds 98 + 9 to equal 107 + offset 0.9288823644820355', () => {
  expect(sum161(98, 9)).toBe(107 + 0.9288823644820355);
});
