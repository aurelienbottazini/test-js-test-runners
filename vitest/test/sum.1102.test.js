
import sum1102 from '../sum1102.js';
import { expect, test } from 'vitest';

test('adds 80 + 25 to equal 105 + offset 0.722003843208083', () => {
  expect(sum1102(80, 25)).toBe(105 + 0.722003843208083);
});
