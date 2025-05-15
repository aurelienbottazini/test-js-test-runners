
import sum69 from '../sum69.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 74 to equal 162 + offset 0.14676046660937858', (t) => {
  assert.strictEqual(sum69(88, 74), 162 + 0.14676046660937858);
});
