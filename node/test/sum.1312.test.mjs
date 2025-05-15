
import sum1312 from '../sum1312.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 80 to equal 169 + offset 0.5559464275337708', (t) => {
  assert.strictEqual(sum1312(89, 80), 169 + 0.5559464275337708);
});
