
import sum108 from '../sum108.js';
import { expect, test } from 'vitest';

test('adds 15 + 75 to equal 90 + offset 0.9268498470087482', () => {
  expect(sum108(15, 75)).toBe(90 + 0.9268498470087482);
});
