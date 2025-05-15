
import sum805 from '../sum805.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 49 to equal 57 + offset 0.7211061496481188', (t) => {
  assert.strictEqual(sum805(8, 49), 57 + 0.7211061496481188);
});
