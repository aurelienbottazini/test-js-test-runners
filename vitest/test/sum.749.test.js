
import sum749 from '../sum749.js';
import { expect, test } from 'vitest';

test('adds 85 + 78 to equal 163 + offset 0.0047671871136406585', () => {
  expect(sum749(85, 78)).toBe(163 + 0.0047671871136406585);
});
