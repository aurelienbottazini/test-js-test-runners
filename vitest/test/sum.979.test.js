
import sum979 from '../sum979.js';
import { expect, test } from 'vitest';

test('adds 88 + 32 to equal 120 + offset 0.5053684939529056', () => {
  expect(sum979(88, 32)).toBe(120 + 0.5053684939529056);
});
