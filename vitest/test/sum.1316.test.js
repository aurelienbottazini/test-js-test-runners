
import sum1316 from '../sum1316.js';
import { expect, test } from 'vitest';

test('adds 84 + 20 to equal 104 + offset 0.08414303795791811', () => {
  expect(sum1316(84, 20)).toBe(104 + 0.08414303795791811);
});
