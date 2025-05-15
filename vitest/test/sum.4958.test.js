
import sum4958 from '../sum4958.js';
import { expect, test } from 'vitest';

test('adds 41 + 28 to equal 69 + offset 0.7497863258148983', () => {
  expect(sum4958(41, 28)).toBe(69 + 0.7497863258148983);
});
