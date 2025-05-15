
import sum4680 from '../sum4680.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 98 to equal 190 + offset 0.9191979154352409', (t) => {
  assert.strictEqual(sum4680(92, 98), 190 + 0.9191979154352409);
});
