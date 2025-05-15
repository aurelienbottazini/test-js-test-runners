
import sum4579 from '../sum4579.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 92 to equal 154 + offset 0.5893121832272793', (t) => {
  assert.strictEqual(sum4579(62, 92), 154 + 0.5893121832272793);
});
