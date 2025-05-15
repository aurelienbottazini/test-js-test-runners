
import sum4290 from '../sum4290.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 24 to equal 113 + offset 0.6940610897476086', (t) => {
  assert.strictEqual(sum4290(89, 24), 113 + 0.6940610897476086);
});
