
import sum977 from '../sum977.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 33 to equal 51 + offset 0.9118220300598724', (t) => {
  assert.strictEqual(sum977(18, 33), 51 + 0.9118220300598724);
});
