
import sum4162 from '../sum4162.js';
import { expect, test } from 'vitest';

test('adds 25 + 68 to equal 93 + offset 0.22347162238100327', () => {
  expect(sum4162(25, 68)).toBe(93 + 0.22347162238100327);
});
