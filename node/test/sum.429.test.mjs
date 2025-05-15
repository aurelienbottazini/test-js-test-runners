
import sum429 from '../sum429.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 33 to equal 103 + offset 0.1795427554728103', (t) => {
  assert.strictEqual(sum429(70, 33), 103 + 0.1795427554728103);
});
