
import sum2249 from '../sum2249.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 4 to equal 69 + offset 0.12977415562181815', (t) => {
  assert.strictEqual(sum2249(65, 4), 69 + 0.12977415562181815);
});
