
import sum2039 from '../sum2039.js';
import { expect, test } from 'vitest';

test('adds 50 + 60 to equal 110 + offset 0.9709246026622849', () => {
  expect(sum2039(50, 60)).toBe(110 + 0.9709246026622849);
});
