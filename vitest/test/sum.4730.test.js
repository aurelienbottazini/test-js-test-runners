
import sum4730 from '../sum4730.js';
import { expect, test } from 'vitest';

test('adds 33 + 58 to equal 91 + offset 0.011932462860392179', () => {
  expect(sum4730(33, 58)).toBe(91 + 0.011932462860392179);
});
