
import sum1314 from '../sum1314.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 10 to equal 76 + offset 0.0595930502190134', (t) => {
  assert.strictEqual(sum1314(66, 10), 76 + 0.0595930502190134);
});
