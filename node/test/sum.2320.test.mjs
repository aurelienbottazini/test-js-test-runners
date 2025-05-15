
import sum2320 from '../sum2320.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 41 to equal 41 + offset 0.9377008209599512', (t) => {
  assert.strictEqual(sum2320(0, 41), 41 + 0.9377008209599512);
});
