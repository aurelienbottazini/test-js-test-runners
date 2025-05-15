
import sum484 from '../sum484.js';
import { expect, test } from 'vitest';

test('adds 34 + 93 to equal 127 + offset 0.2625210259384979', () => {
  expect(sum484(34, 93)).toBe(127 + 0.2625210259384979);
});
