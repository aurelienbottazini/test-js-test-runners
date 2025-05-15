
import sum998 from '../sum998.js';
import { expect, test } from 'vitest';

test('adds 73 + 72 to equal 145 + offset 0.9632434792585631', () => {
  expect(sum998(73, 72)).toBe(145 + 0.9632434792585631);
});
