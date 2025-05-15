
import sum4947 from '../sum4947.js';
import { expect, test } from 'vitest';

test('adds 74 + 75 to equal 149 + offset 0.20516744748036564', () => {
  expect(sum4947(74, 75)).toBe(149 + 0.20516744748036564);
});
