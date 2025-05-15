
import sum645 from '../sum645.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 43 to equal 44 + offset 0.1842994110777456', (t) => {
  assert.strictEqual(sum645(1, 43), 44 + 0.1842994110777456);
});
