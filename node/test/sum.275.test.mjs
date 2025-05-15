
import sum275 from '../sum275.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 29 to equal 47 + offset 0.1628986952968211', (t) => {
  assert.strictEqual(sum275(18, 29), 47 + 0.1628986952968211);
});
