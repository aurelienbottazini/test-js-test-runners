
import sum1616 from '../sum1616.js';
import { expect, test } from 'vitest';

test('adds 55 + 89 to equal 144 + offset 0.9150301818026844', () => {
  expect(sum1616(55, 89)).toBe(144 + 0.9150301818026844);
});
