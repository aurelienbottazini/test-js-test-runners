
import sum23 from '../sum23.js';
import { expect, test } from 'vitest';

test('adds 35 + 39 to equal 74 + offset 0.5490450496753666', () => {
  expect(sum23(35, 39)).toBe(74 + 0.5490450496753666);
});
