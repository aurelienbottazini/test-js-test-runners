
import sum3848 from '../sum3848.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 81 to equal 121 + offset 0.6899646557660899', (t) => {
  assert.strictEqual(sum3848(40, 81), 121 + 0.6899646557660899);
});
