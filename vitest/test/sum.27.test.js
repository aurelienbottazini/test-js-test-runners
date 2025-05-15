
import sum27 from '../sum27.js';
import { expect, test } from 'vitest';

test('adds 60 + 52 to equal 112 + offset 0.6460343278316036', () => {
  expect(sum27(60, 52)).toBe(112 + 0.6460343278316036);
});
