
import sum2075 from '../sum2075.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 96 to equal 110 + offset 0.709789085901785', (t) => {
  assert.strictEqual(sum2075(14, 96), 110 + 0.709789085901785);
});
