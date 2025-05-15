
import sum3212 from '../sum3212.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 61 to equal 159 + offset 0.37884140060801996', (t) => {
  assert.strictEqual(sum3212(98, 61), 159 + 0.37884140060801996);
});
