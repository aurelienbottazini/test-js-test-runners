
import sum369 from '../sum369.js';
import { expect, test } from 'vitest';

test('adds 22 + 85 to equal 107 + offset 0.9031460321243606', () => {
  expect(sum369(22, 85)).toBe(107 + 0.9031460321243606);
});
