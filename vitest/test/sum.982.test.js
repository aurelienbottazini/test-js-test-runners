
import sum982 from '../sum982.js';
import { expect, test } from 'vitest';

test('adds 24 + 29 to equal 53 + offset 0.2958671116745769', () => {
  expect(sum982(24, 29)).toBe(53 + 0.2958671116745769);
});
