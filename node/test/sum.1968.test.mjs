
import sum1968 from '../sum1968.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 8 to equal 106 + offset 0.38567108596700717', (t) => {
  assert.strictEqual(sum1968(98, 8), 106 + 0.38567108596700717);
});
