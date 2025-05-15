
import sum644 from '../sum644.js';
import { expect, test } from 'vitest';

test('adds 26 + 92 to equal 118 + offset 0.9872662227168577', () => {
  expect(sum644(26, 92)).toBe(118 + 0.9872662227168577);
});
