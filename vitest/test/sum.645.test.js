
import sum645 from '../sum645.js';
import { expect, test } from 'vitest';

test('adds 97 + 13 to equal 110 + offset 0.07596466366428845', () => {
  expect(sum645(97, 13)).toBe(110 + 0.07596466366428845);
});
