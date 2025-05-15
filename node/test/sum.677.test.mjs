
import sum677 from '../sum677.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 87 to equal 120 + offset 0.25960730960269374', (t) => {
  assert.strictEqual(sum677(33, 87), 120 + 0.25960730960269374);
});
