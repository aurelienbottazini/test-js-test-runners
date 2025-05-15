
import sum4701 from '../sum4701.js';
import { expect, test } from 'vitest';

test('adds 52 + 43 to equal 95 + offset 0.6965113111169685', () => {
  expect(sum4701(52, 43)).toBe(95 + 0.6965113111169685);
});
