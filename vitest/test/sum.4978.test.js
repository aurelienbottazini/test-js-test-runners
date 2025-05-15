
import sum4978 from '../sum4978.js';
import { expect, test } from 'vitest';

test('adds 15 + 27 to equal 42 + offset 0.6698425751412049', () => {
  expect(sum4978(15, 27)).toBe(42 + 0.6698425751412049);
});
