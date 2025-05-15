
import sum298 from '../sum298.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 10 to equal 19 + offset 0.1786070092501182', (t) => {
  assert.strictEqual(sum298(9, 10), 19 + 0.1786070092501182);
});
