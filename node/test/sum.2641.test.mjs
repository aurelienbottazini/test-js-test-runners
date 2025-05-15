
import sum2641 from '../sum2641.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 33 to equal 88 + offset 0.30375940676573077', (t) => {
  assert.strictEqual(sum2641(55, 33), 88 + 0.30375940676573077);
});
