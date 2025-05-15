
import sum4266 from '../sum4266.js';
import { expect, test } from 'vitest';

test('adds 26 + 29 to equal 55 + offset 0.3594813733173853', () => {
  expect(sum4266(26, 29)).toBe(55 + 0.3594813733173853);
});
