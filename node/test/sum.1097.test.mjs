
import sum1097 from '../sum1097.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 86 to equal 104 + offset 0.36446985000716015', (t) => {
  assert.strictEqual(sum1097(18, 86), 104 + 0.36446985000716015);
});
