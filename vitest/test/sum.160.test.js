
import sum160 from '../sum160.js';
import { expect, test } from 'vitest';

test('adds 87 + 28 to equal 115 + offset 0.07762905636939732', () => {
  expect(sum160(87, 28)).toBe(115 + 0.07762905636939732);
});
