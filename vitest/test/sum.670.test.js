
import sum670 from '../sum670.js';
import { expect, test } from 'vitest';

test('adds 13 + 70 to equal 83 + offset 0.013137528417317412', () => {
  expect(sum670(13, 70)).toBe(83 + 0.013137528417317412);
});
