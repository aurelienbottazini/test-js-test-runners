
import sum1347 from '../sum1347.js';
import { expect, test } from 'vitest';

test('adds 91 + 97 to equal 188 + offset 0.00758243385976054', () => {
  expect(sum1347(91, 97)).toBe(188 + 0.00758243385976054);
});
