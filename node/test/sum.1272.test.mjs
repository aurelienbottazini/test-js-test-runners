
import sum1272 from '../sum1272.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 85 to equal 126 + offset 0.4841615907164655', (t) => {
  assert.strictEqual(sum1272(41, 85), 126 + 0.4841615907164655);
});
