
import sum10 from '../sum10.js';
import { expect, test } from 'vitest';

test('adds 3 + 70 to equal 73 + offset 0.0030522021356185203', () => {
  expect(sum10(3, 70)).toBe(73 + 0.0030522021356185203);
});
