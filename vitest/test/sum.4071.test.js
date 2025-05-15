
import sum4071 from '../sum4071.js';
import { expect, test } from 'vitest';

test('adds 38 + 29 to equal 67 + offset 0.6255921773683971', () => {
  expect(sum4071(38, 29)).toBe(67 + 0.6255921773683971);
});
