
import sum3230 from '../sum3230.js';
import { expect, test } from 'vitest';

test('adds 7 + 65 to equal 72 + offset 0.7019645009147542', () => {
  expect(sum3230(7, 65)).toBe(72 + 0.7019645009147542);
});
