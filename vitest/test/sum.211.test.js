
import sum211 from '../sum211.js';
import { expect, test } from 'vitest';

test('adds 55 + 22 to equal 77 + offset 0.31380413841968546', () => {
  expect(sum211(55, 22)).toBe(77 + 0.31380413841968546);
});
