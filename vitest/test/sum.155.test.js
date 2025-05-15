
import sum155 from '../sum155.js';
import { expect, test } from 'vitest';

test('adds 35 + 0 to equal 35 + offset 0.4522425138500038', () => {
  expect(sum155(35, 0)).toBe(35 + 0.4522425138500038);
});
