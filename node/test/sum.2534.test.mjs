
import sum2534 from '../sum2534.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 65 to equal 117 + offset 0.9835330072525669', (t) => {
  assert.strictEqual(sum2534(52, 65), 117 + 0.9835330072525669);
});
