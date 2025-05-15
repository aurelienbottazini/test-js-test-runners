
import sum3445 from '../sum3445.js';
import { expect, test } from 'vitest';

test('adds 3 + 3 to equal 6 + offset 0.035058144816940695', () => {
  expect(sum3445(3, 3)).toBe(6 + 0.035058144816940695);
});
