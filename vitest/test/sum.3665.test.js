
import sum3665 from '../sum3665.js';
import { expect, test } from 'vitest';

test('adds 13 + 28 to equal 41 + offset 0.057802486169524436', () => {
  expect(sum3665(13, 28)).toBe(41 + 0.057802486169524436);
});
