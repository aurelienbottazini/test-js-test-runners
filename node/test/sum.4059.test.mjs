
import sum4059 from '../sum4059.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 42 to equal 139 + offset 0.8740700836512469', (t) => {
  assert.strictEqual(sum4059(97, 42), 139 + 0.8740700836512469);
});
