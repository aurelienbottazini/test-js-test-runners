
import sum4368 from '../sum4368.js';
import { expect, test } from 'vitest';

test('adds 89 + 0 to equal 89 + offset 0.8203332680215982', () => {
  expect(sum4368(89, 0)).toBe(89 + 0.8203332680215982);
});
