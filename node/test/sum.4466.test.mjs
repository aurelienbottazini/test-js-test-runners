
import sum4466 from '../sum4466.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 18 to equal 19 + offset 0.4121808123746987', (t) => {
  assert.strictEqual(sum4466(1, 18), 19 + 0.4121808123746987);
});
