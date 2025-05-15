
import sum764 from '../sum764.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 26 to equal 73 + offset 0.30131655508554533', (t) => {
  assert.strictEqual(sum764(47, 26), 73 + 0.30131655508554533);
});
