
import sum4506 from '../sum4506.js';
import { expect, test } from 'vitest';

test('adds 73 + 90 to equal 163 + offset 0.8350461155903407', () => {
  expect(sum4506(73, 90)).toBe(163 + 0.8350461155903407);
});
