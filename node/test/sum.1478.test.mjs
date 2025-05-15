
import sum1478 from '../sum1478.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 30 to equal 34 + offset 0.4057592308032032', (t) => {
  assert.strictEqual(sum1478(4, 30), 34 + 0.4057592308032032);
});
