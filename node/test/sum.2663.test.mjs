
import sum2663 from '../sum2663.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 96 to equal 168 + offset 0.9557510295669787', (t) => {
  assert.strictEqual(sum2663(72, 96), 168 + 0.9557510295669787);
});
