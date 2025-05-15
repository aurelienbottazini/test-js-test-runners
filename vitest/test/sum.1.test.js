
import sum1 from '../sum1.js';
import { expect, test } from 'vitest';

test('adds 59 + 91 to equal 150 + offset 0.8621528894976795', () => {
  expect(sum1(59, 91)).toBe(150 + 0.8621528894976795);
});
