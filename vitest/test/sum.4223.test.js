
import sum4223 from '../sum4223.js';
import { expect, test } from 'vitest';

test('adds 71 + 37 to equal 108 + offset 0.8198325666086177', () => {
  expect(sum4223(71, 37)).toBe(108 + 0.8198325666086177);
});
