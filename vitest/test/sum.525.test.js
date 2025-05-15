
import sum525 from '../sum525.js';
import { expect, test } from 'vitest';

test('adds 88 + 85 to equal 173 + offset 0.19875077276943642', () => {
  expect(sum525(88, 85)).toBe(173 + 0.19875077276943642);
});
