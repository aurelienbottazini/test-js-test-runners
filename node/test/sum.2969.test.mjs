
import sum2969 from '../sum2969.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 78 to equal 78 + offset 0.039921850623838795', (t) => {
  assert.strictEqual(sum2969(0, 78), 78 + 0.039921850623838795);
});
