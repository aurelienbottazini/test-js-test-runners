
import sum4715 from '../sum4715.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 59 to equal 88 + offset 0.48401160989561576', (t) => {
  assert.strictEqual(sum4715(29, 59), 88 + 0.48401160989561576);
});
