
import sum1971 from '../sum1971.js';
import { expect, test } from 'vitest';

test('adds 8 + 94 to equal 102 + offset 0.9653811531939065', () => {
  expect(sum1971(8, 94)).toBe(102 + 0.9653811531939065);
});
