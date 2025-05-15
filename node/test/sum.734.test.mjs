
import sum734 from '../sum734.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 54 to equal 115 + offset 0.4145397541999192', (t) => {
  assert.strictEqual(sum734(61, 54), 115 + 0.4145397541999192);
});
