
import sum2804 from '../sum2804.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 81 to equal 121 + offset 0.03158780274997064', (t) => {
  assert.strictEqual(sum2804(40, 81), 121 + 0.03158780274997064);
});
