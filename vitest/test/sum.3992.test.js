
import sum3992 from '../sum3992.js';
import { expect, test } from 'vitest';

test('adds 0 + 15 to equal 15 + offset 0.5565508180178446', () => {
  expect(sum3992(0, 15)).toBe(15 + 0.5565508180178446);
});
