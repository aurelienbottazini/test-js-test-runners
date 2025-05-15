
import sum4073 from '../sum4073.js';
import { expect, test } from 'vitest';

test('adds 79 + 43 to equal 122 + offset 0.21455270931420056', () => {
  expect(sum4073(79, 43)).toBe(122 + 0.21455270931420056);
});
