
import sum4797 from '../sum4797.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 64 to equal 74 + offset 0.7957922761814102', (t) => {
  assert.strictEqual(sum4797(10, 64), 74 + 0.7957922761814102);
});
