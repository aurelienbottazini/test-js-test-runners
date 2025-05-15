
import sum1554 from '../sum1554.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 33 to equal 97 + offset 0.14420352400050873', (t) => {
  assert.strictEqual(sum1554(64, 33), 97 + 0.14420352400050873);
});
