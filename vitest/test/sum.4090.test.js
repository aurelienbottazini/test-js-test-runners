
import sum4090 from '../sum4090.js';
import { expect, test } from 'vitest';

test('adds 5 + 6 to equal 11 + offset 0.9124809458591991', () => {
  expect(sum4090(5, 6)).toBe(11 + 0.9124809458591991);
});
