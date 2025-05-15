
import sum674 from '../sum674.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 31 to equal 53 + offset 0.33813944383022254', (t) => {
  assert.strictEqual(sum674(22, 31), 53 + 0.33813944383022254);
});
