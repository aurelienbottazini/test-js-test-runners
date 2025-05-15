
import sum679 from '../sum679.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 29 to equal 109 + offset 0.557973271217739', (t) => {
  assert.strictEqual(sum679(80, 29), 109 + 0.557973271217739);
});
