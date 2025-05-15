
import sum481 from '../sum481.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 80 to equal 144 + offset 0.9016677801863708', (t) => {
  assert.strictEqual(sum481(64, 80), 144 + 0.9016677801863708);
});
