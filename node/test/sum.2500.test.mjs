
import sum2500 from '../sum2500.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 11 to equal 33 + offset 0.31796115206225795', (t) => {
  assert.strictEqual(sum2500(22, 11), 33 + 0.31796115206225795);
});
