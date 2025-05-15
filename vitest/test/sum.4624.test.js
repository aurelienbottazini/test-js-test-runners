
import sum4624 from '../sum4624.js';
import { expect, test } from 'vitest';

test('adds 47 + 3 to equal 50 + offset 0.479809288216015', () => {
  expect(sum4624(47, 3)).toBe(50 + 0.479809288216015);
});
