
import sum93 from '../sum93.js';
import { expect, test } from 'vitest';

test('adds 42 + 51 to equal 93 + offset 0.40678257084116776', () => {
  expect(sum93(42, 51)).toBe(93 + 0.40678257084116776);
});
