
import sum4304 from '../sum4304.js';
import { expect, test } from 'vitest';

test('adds 0 + 44 to equal 44 + offset 0.022079761920318464', () => {
  expect(sum4304(0, 44)).toBe(44 + 0.022079761920318464);
});
