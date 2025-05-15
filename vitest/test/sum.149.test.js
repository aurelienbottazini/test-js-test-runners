
import sum149 from '../sum149.js';
import { expect, test } from 'vitest';

test('adds 22 + 95 to equal 117 + offset 0.2536061472760831', () => {
  expect(sum149(22, 95)).toBe(117 + 0.2536061472760831);
});
