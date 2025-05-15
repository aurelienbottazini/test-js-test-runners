
import sum2755 from '../sum2755.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 66 to equal 152 + offset 0.6206873553973081', (t) => {
  assert.strictEqual(sum2755(86, 66), 152 + 0.6206873553973081);
});
