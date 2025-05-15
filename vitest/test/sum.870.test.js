
import sum870 from '../sum870.js';
import { expect, test } from 'vitest';

test('adds 81 + 56 to equal 137 + offset 0.4647995490463198', () => {
  expect(sum870(81, 56)).toBe(137 + 0.4647995490463198);
});
