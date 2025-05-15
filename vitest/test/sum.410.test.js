
import sum410 from '../sum410.js';
import { expect, test } from 'vitest';

test('adds 85 + 66 to equal 151 + offset 0.2601869330143075', () => {
  expect(sum410(85, 66)).toBe(151 + 0.2601869330143075);
});
