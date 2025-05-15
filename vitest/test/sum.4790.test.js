
import sum4790 from '../sum4790.js';
import { expect, test } from 'vitest';

test('adds 84 + 67 to equal 151 + offset 0.8490410650553859', () => {
  expect(sum4790(84, 67)).toBe(151 + 0.8490410650553859);
});
