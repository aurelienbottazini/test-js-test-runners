
import sum189 from '../sum189.js';
import { expect, test } from 'vitest';

test('adds 62 + 88 to equal 150 + offset 0.07822935735535541', () => {
  expect(sum189(62, 88)).toBe(150 + 0.07822935735535541);
});
