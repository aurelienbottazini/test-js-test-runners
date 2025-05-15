
import sum4840 from '../sum4840.js';
import { expect, test } from 'vitest';

test('adds 65 + 93 to equal 158 + offset 0.26123763127526345', () => {
  expect(sum4840(65, 93)).toBe(158 + 0.26123763127526345);
});
