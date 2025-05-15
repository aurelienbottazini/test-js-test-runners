
import sum4305 from '../sum4305.js';
import { expect, test } from 'vitest';

test('adds 9 + 10 to equal 19 + offset 0.2457304249785145', () => {
  expect(sum4305(9, 10)).toBe(19 + 0.2457304249785145);
});
