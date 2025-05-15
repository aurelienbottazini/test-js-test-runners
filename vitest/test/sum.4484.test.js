
import sum4484 from '../sum4484.js';
import { expect, test } from 'vitest';

test('adds 91 + 10 to equal 101 + offset 0.2296646585255262', () => {
  expect(sum4484(91, 10)).toBe(101 + 0.2296646585255262);
});
