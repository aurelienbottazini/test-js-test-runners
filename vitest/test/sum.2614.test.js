
import sum2614 from '../sum2614.js';
import { expect, test } from 'vitest';

test('adds 54 + 85 to equal 139 + offset 0.1888373348409439', () => {
  expect(sum2614(54, 85)).toBe(139 + 0.1888373348409439);
});
