
import sum64 from '../sum64.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 58 to equal 118 + offset 0.9168512691068209', (t) => {
  assert.strictEqual(sum64(60, 58), 118 + 0.9168512691068209);
});
