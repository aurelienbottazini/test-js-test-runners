
import sum4199 from '../sum4199.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 48 to equal 67 + offset 0.1283065575418204', (t) => {
  assert.strictEqual(sum4199(19, 48), 67 + 0.1283065575418204);
});
