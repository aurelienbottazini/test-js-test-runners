
import sum4478 from '../sum4478.js';
import { expect, test } from 'vitest';

test('adds 42 + 80 to equal 122 + offset 0.30736207148868366', () => {
  expect(sum4478(42, 80)).toBe(122 + 0.30736207148868366);
});
