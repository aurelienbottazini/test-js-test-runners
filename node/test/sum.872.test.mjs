
import sum872 from '../sum872.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 94 to equal 114 + offset 0.9455030216965408', (t) => {
  assert.strictEqual(sum872(20, 94), 114 + 0.9455030216965408);
});
