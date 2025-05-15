
import sum4739 from '../sum4739.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 63 to equal 127 + offset 0.23038437959330693', (t) => {
  assert.strictEqual(sum4739(64, 63), 127 + 0.23038437959330693);
});
