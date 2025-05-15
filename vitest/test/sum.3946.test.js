
import sum3946 from '../sum3946.js';
import { expect, test } from 'vitest';

test('adds 88 + 21 to equal 109 + offset 0.5552416267862139', () => {
  expect(sum3946(88, 21)).toBe(109 + 0.5552416267862139);
});
