
import sum2118 from '../sum2118.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 47 to equal 125 + offset 0.8966017164001642', (t) => {
  assert.strictEqual(sum2118(78, 47), 125 + 0.8966017164001642);
});
