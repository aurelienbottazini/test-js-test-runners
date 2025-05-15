
import sum867 from '../sum867.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 73 to equal 88 + offset 0.801587857449337', (t) => {
  assert.strictEqual(sum867(15, 73), 88 + 0.801587857449337);
});
