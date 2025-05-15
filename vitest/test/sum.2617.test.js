
import sum2617 from '../sum2617.js';
import { expect, test } from 'vitest';

test('adds 48 + 80 to equal 128 + offset 0.5381769238523729', () => {
  expect(sum2617(48, 80)).toBe(128 + 0.5381769238523729);
});
