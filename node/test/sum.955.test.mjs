
import sum955 from '../sum955.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 83 to equal 118 + offset 0.5573382381890003', (t) => {
  assert.strictEqual(sum955(35, 83), 118 + 0.5573382381890003);
});
