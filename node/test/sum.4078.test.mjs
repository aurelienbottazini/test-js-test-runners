
import sum4078 from '../sum4078.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 52 to equal 123 + offset 0.6193695871494351', (t) => {
  assert.strictEqual(sum4078(71, 52), 123 + 0.6193695871494351);
});
