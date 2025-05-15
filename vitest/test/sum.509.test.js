
import sum509 from '../sum509.js';
import { expect, test } from 'vitest';

test('adds 55 + 54 to equal 109 + offset 0.6006416824967832', () => {
  expect(sum509(55, 54)).toBe(109 + 0.6006416824967832);
});
