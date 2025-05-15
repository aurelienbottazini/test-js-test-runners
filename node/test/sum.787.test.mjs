
import sum787 from '../sum787.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 14 to equal 42 + offset 0.4803627834605123', (t) => {
  assert.strictEqual(sum787(28, 14), 42 + 0.4803627834605123);
});
