
import sum2151 from '../sum2151.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 11 to equal 91 + offset 0.913136986898789', (t) => {
  assert.strictEqual(sum2151(80, 11), 91 + 0.913136986898789);
});
