
import sum4703 from '../sum4703.js';
import { expect, test } from 'vitest';

test('adds 88 + 34 to equal 122 + offset 0.8116670229669671', () => {
  expect(sum4703(88, 34)).toBe(122 + 0.8116670229669671);
});
