
import sum2303 from '../sum2303.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 17 to equal 98 + offset 0.24425694532207087', (t) => {
  assert.strictEqual(sum2303(81, 17), 98 + 0.24425694532207087);
});
