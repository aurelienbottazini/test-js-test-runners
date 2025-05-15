
import sum4447 from '../sum4447.js';
import { expect, test } from 'vitest';

test('adds 84 + 66 to equal 150 + offset 0.6969734147433909', () => {
  expect(sum4447(84, 66)).toBe(150 + 0.6969734147433909);
});
