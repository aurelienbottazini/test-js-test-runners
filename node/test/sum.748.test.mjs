
import sum748 from '../sum748.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 81 to equal 81 + offset 0.49601884843591504', (t) => {
  assert.strictEqual(sum748(0, 81), 81 + 0.49601884843591504);
});
