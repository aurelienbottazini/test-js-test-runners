
import sum3997 from '../sum3997.js';
import { expect, test } from 'vitest';

test('adds 30 + 26 to equal 56 + offset 0.9021735087713378', () => {
  expect(sum3997(30, 26)).toBe(56 + 0.9021735087713378);
});
