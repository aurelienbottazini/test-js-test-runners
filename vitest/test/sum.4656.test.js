
import sum4656 from '../sum4656.js';
import { expect, test } from 'vitest';

test('adds 72 + 11 to equal 83 + offset 0.4476022526623067', () => {
  expect(sum4656(72, 11)).toBe(83 + 0.4476022526623067);
});
