
import sum3964 from '../sum3964.js';
import { expect, test } from 'vitest';

test('adds 37 + 25 to equal 62 + offset 0.9613740348448812', () => {
  expect(sum3964(37, 25)).toBe(62 + 0.9613740348448812);
});
