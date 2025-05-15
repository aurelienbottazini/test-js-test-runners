
import sum2367 from '../sum2367.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 61 to equal 139 + offset 0.8612135091755483', (t) => {
  assert.strictEqual(sum2367(78, 61), 139 + 0.8612135091755483);
});
