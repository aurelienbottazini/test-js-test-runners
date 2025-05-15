
import sum186 from '../sum186.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 25 to equal 74 + offset 0.4100391071318801', (t) => {
  assert.strictEqual(sum186(49, 25), 74 + 0.4100391071318801);
});
