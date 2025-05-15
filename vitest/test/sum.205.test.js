
import sum205 from '../sum205.js';
import { expect, test } from 'vitest';

test('adds 19 + 26 to equal 45 + offset 0.7749453146492558', () => {
  expect(sum205(19, 26)).toBe(45 + 0.7749453146492558);
});
