
import sum949 from '../sum949.js';
import { expect, test } from 'vitest';

test('adds 67 + 24 to equal 91 + offset 0.3243356651145217', () => {
  expect(sum949(67, 24)).toBe(91 + 0.3243356651145217);
});
