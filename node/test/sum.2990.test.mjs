
import sum2990 from '../sum2990.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 13 to equal 73 + offset 0.2707027183036663', (t) => {
  assert.strictEqual(sum2990(60, 13), 73 + 0.2707027183036663);
});
