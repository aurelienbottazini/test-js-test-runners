
import sum547 from '../sum547.js';
import { expect, test } from 'vitest';

test('adds 39 + 78 to equal 117 + offset 0.623596572524843', () => {
  expect(sum547(39, 78)).toBe(117 + 0.623596572524843);
});
