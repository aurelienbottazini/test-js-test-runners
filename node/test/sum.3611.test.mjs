
import sum3611 from '../sum3611.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 48 to equal 132 + offset 0.09494492243769637', (t) => {
  assert.strictEqual(sum3611(84, 48), 132 + 0.09494492243769637);
});
