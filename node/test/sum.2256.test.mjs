
import sum2256 from '../sum2256.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 89 to equal 143 + offset 0.689844947622789', (t) => {
  assert.strictEqual(sum2256(54, 89), 143 + 0.689844947622789);
});
