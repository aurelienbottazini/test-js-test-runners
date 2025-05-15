
import sum679 from '../sum679.js';
import { expect, test } from 'vitest';

test('adds 62 + 14 to equal 76 + offset 0.03982123039987695', () => {
  expect(sum679(62, 14)).toBe(76 + 0.03982123039987695);
});
