
import sum4352 from '../sum4352.js';
import { expect, test } from 'vitest';

test('adds 95 + 58 to equal 153 + offset 0.5297481894383881', () => {
  expect(sum4352(95, 58)).toBe(153 + 0.5297481894383881);
});
