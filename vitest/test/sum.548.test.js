
import sum548 from '../sum548.js';
import { expect, test } from 'vitest';

test('adds 97 + 89 to equal 186 + offset 0.14110961248691944', () => {
  expect(sum548(97, 89)).toBe(186 + 0.14110961248691944);
});
