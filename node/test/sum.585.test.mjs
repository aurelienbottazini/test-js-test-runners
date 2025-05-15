
import sum585 from '../sum585.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 3 to equal 62 + offset 0.11602980026240417', (t) => {
  assert.strictEqual(sum585(59, 3), 62 + 0.11602980026240417);
});
