
import sum4436 from '../sum4436.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 87 to equal 157 + offset 0.7174314134330547', (t) => {
  assert.strictEqual(sum4436(70, 87), 157 + 0.7174314134330547);
});
