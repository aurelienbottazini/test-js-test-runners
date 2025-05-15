
import sum4201 from '../sum4201.js';
import { expect, test } from 'vitest';

test('adds 15 + 20 to equal 35 + offset 0.2010246732516513', () => {
  expect(sum4201(15, 20)).toBe(35 + 0.2010246732516513);
});
