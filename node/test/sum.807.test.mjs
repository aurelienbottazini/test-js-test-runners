
import sum807 from '../sum807.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 72 to equal 140 + offset 0.9372748021620336', (t) => {
  assert.strictEqual(sum807(68, 72), 140 + 0.9372748021620336);
});
