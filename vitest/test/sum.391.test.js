
import sum391 from '../sum391.js';
import { expect, test } from 'vitest';

test('adds 42 + 18 to equal 60 + offset 0.7450884567164967', () => {
  expect(sum391(42, 18)).toBe(60 + 0.7450884567164967);
});
