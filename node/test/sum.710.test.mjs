
import sum710 from '../sum710.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 79 to equal 151 + offset 0.8902440766230376', (t) => {
  assert.strictEqual(sum710(72, 79), 151 + 0.8902440766230376);
});
