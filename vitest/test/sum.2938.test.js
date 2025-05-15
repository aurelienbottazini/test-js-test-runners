
import sum2938 from '../sum2938.js';
import { expect, test } from 'vitest';

test('adds 91 + 6 to equal 97 + offset 0.1030101632580569', () => {
  expect(sum2938(91, 6)).toBe(97 + 0.1030101632580569);
});
