
import sum4503 from '../sum4503.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 91 to equal 187 + offset 0.21529056610394126', (t) => {
  assert.strictEqual(sum4503(96, 91), 187 + 0.21529056610394126);
});
