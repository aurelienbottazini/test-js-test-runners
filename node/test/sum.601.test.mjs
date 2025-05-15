
import sum601 from '../sum601.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 57 to equal 77 + offset 0.016321735645906443', (t) => {
  assert.strictEqual(sum601(20, 57), 77 + 0.016321735645906443);
});
