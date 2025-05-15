
import sum643 from '../sum643.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 39 to equal 113 + offset 0.561849275338207', (t) => {
  assert.strictEqual(sum643(74, 39), 113 + 0.561849275338207);
});
