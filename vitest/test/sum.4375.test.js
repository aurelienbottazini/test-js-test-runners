
import sum4375 from '../sum4375.js';
import { expect, test } from 'vitest';

test('adds 34 + 40 to equal 74 + offset 0.5912447751231972', () => {
  expect(sum4375(34, 40)).toBe(74 + 0.5912447751231972);
});
