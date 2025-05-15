
import sum1205 from '../sum1205.js';
import { expect, test } from 'vitest';

test('adds 84 + 86 to equal 170 + offset 0.6333138534406328', () => {
  expect(sum1205(84, 86)).toBe(170 + 0.6333138534406328);
});
