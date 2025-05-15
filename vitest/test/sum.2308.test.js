
import sum2308 from '../sum2308.js';
import { expect, test } from 'vitest';

test('adds 23 + 36 to equal 59 + offset 0.46826947756901405', () => {
  expect(sum2308(23, 36)).toBe(59 + 0.46826947756901405);
});
