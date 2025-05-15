
import sum2908 from '../sum2908.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 22 to equal 33 + offset 0.3522264349813118', (t) => {
  assert.strictEqual(sum2908(11, 22), 33 + 0.3522264349813118);
});
