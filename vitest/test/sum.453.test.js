
import sum453 from '../sum453.js';
import { expect, test } from 'vitest';

test('adds 48 + 0 to equal 48 + offset 0.8663206845829812', () => {
  expect(sum453(48, 0)).toBe(48 + 0.8663206845829812);
});
