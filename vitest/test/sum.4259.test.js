
import sum4259 from '../sum4259.js';
import { expect, test } from 'vitest';

test('adds 66 + 45 to equal 111 + offset 0.08484957221265077', () => {
  expect(sum4259(66, 45)).toBe(111 + 0.08484957221265077);
});
