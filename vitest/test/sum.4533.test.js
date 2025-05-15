
import sum4533 from '../sum4533.js';
import { expect, test } from 'vitest';

test('adds 6 + 11 to equal 17 + offset 0.3091091226861513', () => {
  expect(sum4533(6, 11)).toBe(17 + 0.3091091226861513);
});
