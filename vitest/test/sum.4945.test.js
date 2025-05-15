
import sum4945 from '../sum4945.js';
import { expect, test } from 'vitest';

test('adds 73 + 59 to equal 132 + offset 0.8898703763243297', () => {
  expect(sum4945(73, 59)).toBe(132 + 0.8898703763243297);
});
