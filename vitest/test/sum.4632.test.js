
import sum4632 from '../sum4632.js';
import { expect, test } from 'vitest';

test('adds 7 + 82 to equal 89 + offset 0.12804804775429235', () => {
  expect(sum4632(7, 82)).toBe(89 + 0.12804804775429235);
});
