
import sum3447 from '../sum3447.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 25 to equal 68 + offset 0.21244240984250218', (t) => {
  assert.strictEqual(sum3447(43, 25), 68 + 0.21244240984250218);
});
