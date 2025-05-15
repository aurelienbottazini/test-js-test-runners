
import sum763 from '../sum763.js';
import { expect, test } from 'vitest';

test('adds 89 + 97 to equal 186 + offset 0.4080440363422497', () => {
  expect(sum763(89, 97)).toBe(186 + 0.4080440363422497);
});
