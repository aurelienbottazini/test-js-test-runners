
import sum154 from '../sum154.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 7 to equal 90 + offset 0.8892550038652461', (t) => {
  assert.strictEqual(sum154(83, 7), 90 + 0.8892550038652461);
});
