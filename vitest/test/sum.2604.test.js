
import sum2604 from '../sum2604.js';
import { expect, test } from 'vitest';

test('adds 78 + 9 to equal 87 + offset 0.10978612473333471', () => {
  expect(sum2604(78, 9)).toBe(87 + 0.10978612473333471);
});
