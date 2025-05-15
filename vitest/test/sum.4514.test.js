
import sum4514 from '../sum4514.js';
import { expect, test } from 'vitest';

test('adds 11 + 15 to equal 26 + offset 0.21553303836326854', () => {
  expect(sum4514(11, 15)).toBe(26 + 0.21553303836326854);
});
