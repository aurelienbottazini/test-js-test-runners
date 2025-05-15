
import sum3582 from '../sum3582.js';
import { expect, test } from 'vitest';

test('adds 41 + 15 to equal 56 + offset 0.27802575079142533', () => {
  expect(sum3582(41, 15)).toBe(56 + 0.27802575079142533);
});
